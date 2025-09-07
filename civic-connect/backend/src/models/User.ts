// src/models/User.ts
import mongoose, { Document, Schema } from "mongoose";

// Define User interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Create schema
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create model
const User = mongoose.model<IUser>("User", userSchema);

// Export default
export default User;
