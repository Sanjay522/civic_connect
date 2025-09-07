import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User, { IUser } from "../models/User";
import generateToken from "../utils/generateToken";
import mongoose from "mongoose";

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: { name?: string; email?: string; password?: string } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const userId = (user._id as mongoose.Types.ObjectId).toString();

    res.json({
      _id: userId,
      name: user.name,
      email: user.email,
      token: generateToken(userId, "user"),
    });
  } catch (error) {
    console.error("Register user error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login existing user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password }: { email?: string; password?: string } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email }) as IUser | null;
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const userId = (user._id as mongoose.Types.ObjectId).toString();

    res.json({
      _id: userId,
      name: user.name,
      email: user.email,
      token: generateToken(userId, "user"),
    });
  } catch (error) {
    console.error("Login user error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
