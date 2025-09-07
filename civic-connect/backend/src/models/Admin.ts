// src/models/Admin.ts
import mongoose, { Document, Schema } from "mongoose";

// Define Admin interface
export interface IAdmin extends Document {
  email: string;
  password: string;
}

// Create schema
const adminSchema = new Schema<IAdmin>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create model
const Admin = mongoose.model<IAdmin>("Admin", adminSchema);

// Export default to make this file a module
export default Admin;
