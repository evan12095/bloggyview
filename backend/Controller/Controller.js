import Blog from "../Models/Models.js";
import mongoose from "mongoose";

export const createBlog = async(req,res) => {
    const {title,writer,category,content,coverImage,createdAt} = req.body;
    const newBlog = new Blog({title,writer,category,content,coverImage,createdAt});
    try {
        await newBlog.save();
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getAllBlog = async(req,res)=>{
    try {
        const allData = await Blog.find();
        res.status(200).json(allData); 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getBlog = async (req,res) => {
    const {id} = req.params;
    try {
        const view =await Blog.findById(id);
        res.status(200).json(view);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const updateBlog = async(req,res) => {
    const {id} = req.params;
    const {title,writer,category,content,coverImage,createdAt} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({message:"no view is found with this id"})
    }
    else{
        const updated = {title,writer,category,content,coverImage,createdAt,_id:id};
        await Blog.findByIdAndUpdate(id,updated,{new:true})
        res.status(202).json({message:"edited"})
    }
}

export const deleteBlog = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({message:"no view is found with this id"})
    }  
    else{
        await Blog.findByIdAndDelete(id);
        res.status(202).json({message:"deleted"})
    } 
}