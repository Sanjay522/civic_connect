import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Admin, { IAdmin } from "../models/Admin";
import generateToken from "../utils/generateToken";
import mongoose from "mongoose";

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password }: { email?: string; password?: string } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const admin = await Admin.findOne({ email }) as IAdmin | null;
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const adminId = (admin._id as mongoose.Types.ObjectId).toString();

    res.json({
      _id: adminId,
      email: admin.email,
      token: generateToken(adminId, "admin"),
    });
  } catch (error) {
    console.error("Login admin error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
