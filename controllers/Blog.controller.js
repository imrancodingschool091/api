import { Blog } from "../models/Blog.model.js";

export const getBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find(); // Changed 'blog' to 'blogs' for better naming
    if (!blogs || blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found" });
    }

    res.status(200).json({ message: "Blogs fetched successfully", blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    let { id } = req.params;
    let blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog fetched successfully", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  let { name, category, title, description } = req.body;

  try {
    let newBlog = new Blog({
      name,
      category,
      title,
      description,
    });

    await newBlog.save();

    res.status(201).json({ message: "Blog created successfully", newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  let { id } = req.params;
  let { name, category, title, description } = req.body;
  try {
    let blog = await Blog.findByIdAndUpdate(
      id,
      { name, category, title, description },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }
    res.status(201).json({ message: "blog edited sucessfully..", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlogs = async (req, res) => {
  try {
    let blog = await Blog.deleteMany();
    if (!blog) {
      return res.status(404).json({ message: "blogs not found" });
    }
    res.status(201).json({ message: "blogs  delete sucessfully..", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteById = async (req, res) => {
  let { id } = req.params;

  try {
    let blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }
    res.status(201).json({ message: "blog  delete sucessfully..", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
