
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import methodOverride from "method-override";

dotenv.config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// EJS configuration
app.set("view engine", "ejs");

// Routes
import postRoutes from "./routes/posts.js";
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
    res.redirect("/posts");
});

// Not found page
app.use((req, res) => {
    res.status(404).render("notfound");
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
