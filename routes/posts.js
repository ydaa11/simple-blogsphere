
import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.render("posts/index", { posts });
});

router.get("/new", (req, res) => {
    res.render("posts/new");
});

router.post("/", async (req, res) => {
    await Post.create(req.body);
    res.redirect("/posts");
});

router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("posts/show", { post });
});

router.get("/:id/edit", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("posts/edit", { post });
});

router.put("/:id", async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/posts");
});

router.delete("/:id", async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/posts");
});

export default router;
