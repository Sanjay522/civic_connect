// src/controllers/issueController.ts
import { Request, Response } from "express";
import Issue, { IIssue } from "../models/Issue";

// Create a new issue
export const createIssue = async (req: Request, res: Response) => {
  try {
    const { title, description, category, location }: { title: string; description?: string; category: string; location: string } = req.body;

    // @ts-ignore
    const issue = await Issue.create({
      title,
      description,
      category,
      location,
      // @ts-ignore
      user: req.user._id, // make sure req.user is typed if using auth middleware
    });

    res.json(issue);
  } catch (error) {
    console.error("Create issue error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get issues of a specific user
export const getUserIssues = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const issues = await Issue.find({ user: req.user._id });
    res.json(issues);
  } catch (error) {
    console.error("Get user issues error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all issues (admin)
export const getAllIssues = async (req: Request, res: Response) => {
  try {
    const issues = await Issue.find().populate("user", "name email");
    res.json(issues);
  } catch (error) {
    console.error("Get all issues error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update issue status
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

// Delete an issue
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
