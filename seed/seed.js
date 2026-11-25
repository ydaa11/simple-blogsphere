
import mongoose from "mongoose";
import Post from "../models/Post.js";

const uri = "mongodb://asiloyezsha_db_user:Iloveyuki123!@ac-rmzqrc9-shard-00-00.g3ygzof.mongodb.net:27017,ac-rmzqrc9-shard-00-01.g3ygzof.mongodb.net:27017,ac-rmzqrc9-shard-00-02.g3ygzof.mongodb.net:27017/Assessment?ssl=true&replicaSet=atlas-43f5nj-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(uri);

const seedPosts = [
{
title: "Welcome to BlogSphere",
author: "Aica",
content: "This is the first blog post.",
tags: ["blog","welcome"]
},
{
title: "MongoDB Project",
author: "Student",
content: "Using MongoDB Atlas connection.",
tags: ["mongodb","atlas"]
}
];

const seedDB = async () => {
await Post.deleteMany({});
await Post.insertMany(seedPosts);

console.log("Database Seeded");

mongoose.connection.close();
};

seedDB();
