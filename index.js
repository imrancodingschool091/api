import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/blog.routes.js";

dotenv.config(); // Load environment variables at the top

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cors()); // Enable CORS

// Database Connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit process if DB connection fails
  }
};





// Connect to DB
connectDb();

app.use("/api/blog",router)


const PORT = process.env.PORT || 5000; // Provide a default port if not set

app.listen(PORT, () => {
  console.log(`The app is running on port: ${PORT}`);
});
