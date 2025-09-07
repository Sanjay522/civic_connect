// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
import Admin, { IAdmin } from "../models/Admin";

// Extend Express Request to include user/admin
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
      admin?: IAdmin;
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");

      const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string; role: string };

      if (decoded.role === "user") {
        req.user = await User.findById(decoded.id).select("-password") as IUser | undefined;
      } else if (decoded.role === "admin") {
        req.admin = await Admin.findById(decoded.id).select("-password") as IAdmin | undefined;
      }

      return next();
    } catch (error) {
      console.error("Auth middleware error:", error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
