// src/server.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import issueRoutes from "./routes/issueRoutes";
import { protect } from "./middleware/authMiddleWare";

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // parse JSON body

// Routes
app.use("/api/users", userRoutes);       // User register/login
app.use("/api/admin", adminRoutes);      // Admin login
app.use("/api/issues", protect, issueRoutes); // Protect all issue routes

// Test route
app.get("/", (req: Request, res: Response) => res.send("API is running"));

// MongoDB connection & server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
