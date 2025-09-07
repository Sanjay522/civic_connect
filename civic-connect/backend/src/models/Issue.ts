import mongoose, { Document, Schema } from "mongoose";

export interface IIssue extends Document {
  title: string;
  description?: string;
  category: string;
  location: string;
  status: string;
  user: mongoose.Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const issueSchema = new Schema<IIssue>(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, default: "Pending" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Issue = mongoose.model<IIssue>("Issue", issueSchema);
export default Issue;
