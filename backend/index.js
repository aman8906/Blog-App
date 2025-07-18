import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";

dotenv.config();
const app = express();

// ✅ Use correct env variable name
const PORT = process.env.PORT || 4001;
const MONGO_URL = process.env.MONGO_URI;

// ✅ CORS Configuration for local + live frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://blog-app-eta-wine.vercel.app", // ✅ Your Vercel frontend URL
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// ✅ MongoDB Connection
try {
  mongoose.connect(MONGO_URL);
  console.log("✅ Connected to MongoDB");
} catch (error) {
  console.error("❌ MongoDB connection error:", error);
}

// ✅ Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// ✅ API Routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
