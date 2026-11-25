
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    author: {
        type: String,
        index: true
    },
    content: String,
    tags: {
        type: [String],
        index: true
    },
    published: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Post", postSchema);
