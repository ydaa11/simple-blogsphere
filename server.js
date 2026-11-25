
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import methodOverride from "method-override";

// Load environment variables from the .env file
dotenv.config();

const app = express();

// Middleware configuration
// Allows the application to process form data
app.use(express.urlencoded({ extended: true }));

// Allows PUT and DELETE requests through HTML forms
app.use(methodOverride("_method"));

// Serves static files such as CSS
app.use(express.static("public"));

// Configure EJS as the view engine
app.set("view engine", "ejs");

// Import and register post routes
import postRoutes from "./routes/posts.js";
app.use("/posts", postRoutes);

// Redirect the homepage to the posts page
app.get("/", (req, res) => {
    res.redirect("/posts");
});

// Handle requests to pages that do not exist
app.use((req, res) => {
    res.status(404).render("notfound");
});

// Connect the application to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

// Start the server using the configured port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
