import express from "express";
import { getBlogs,getBlogById,updateBlog,deleteBlogs,deleteById,createBlog } from "../controllers/Blog.controller.js";

const router=express.Router();
router.get("/",getBlogs)
router.get("/:id",getBlogById);
router.post("/",createBlog);
router.put("/:id",updateBlog);
router.delete("/",deleteBlogs);
router.delete("/:id",deleteById)

export default router