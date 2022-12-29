import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: String,
    writer: String,
    category:String,
    content: String,
    coverImage: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const Blog = mongoose.model("Blog",blogSchema);
export default Blog;