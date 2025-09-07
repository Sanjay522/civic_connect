// src/routes/issueRoutes.ts
import { Router } from "express";
import {
  createIssue,
  getUserIssues,
  getAllIssues,
  updateIssueStatus,
  deleteIssue,
} from "../controllers/issueControllers";
import { protect } from "../middleware/authMiddleWare";

const router = Router();

// Routes
router.post("/", protect, createIssue);
router.get("/my", protect, getUserIssues);
router.get("/", protect, getAllIssues);
router.put("/:id", protect, updateIssueStatus);
router.delete("/:id", protect, deleteIssue);

export default router;
