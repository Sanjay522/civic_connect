import { Request, Response } from "express";
import Issue, { IIssue } from "../models/Issue";
import mongoose from "mongoose";

export const createIssue = async (req: Request, res: Response) => {
  try {
    const { title, description, category, location }: { title: string; description?: string; category: string; location: string } = req.body;
    const userId = req.user?._id as mongoose.Types.ObjectId;

    const issue = await Issue.create({ title, description, category, location, user: userId });
    res.json(issue);
  } catch (error) {
    console.error("Create issue error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserIssues = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id as mongoose.Types.ObjectId;
    const issues = await Issue.find({ user: userId });
    res.json(issues);
  } catch (error) {
    console.error("Get user issues error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllIssues = async (req: Request, res: Response) => {
  try {
    const issues = await Issue.find().populate("user", "name email");
    res.json(issues);
  } catch (error) {
    console.error("Get all issues error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateIssueStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status }: { status?: string } = req.body;

    const issue = await Issue.findById(id);
    if (!issue) return res.status(404).json({ message: "Issue not found" });

    issue.status = status || issue.status;
    await issue.save();
    res.json(issue);
  } catch (error) {
    console.error("Update issue error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteIssue = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Issue.findByIdAndDelete(id);
    res.json({ message: "Issue deleted" });
  } catch (error) {
    console.error("Delete issue error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
