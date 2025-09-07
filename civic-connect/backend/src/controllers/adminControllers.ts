import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Admin, { IAdmin } from "../models/Admin";  // ✅ No .js needed with CommonJS + esModuleInterop
import generateToken from "../utils/generateToken";

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password }: { email: string; password: string } = req.body;

    const admin = await Admin.findOne({ email }) as IAdmin | null;

    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id, "admin"),
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
