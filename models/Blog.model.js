import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
   name:String,
   category:String,
   title:String,
   description:String,

  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
