// src/routes/adminRoutes.ts
import { Router } from "express";
import { loginAdmin } from "../controllers/adminControllers"; // make sure your controller file matches

const router = Router();

router.post("/login", loginAdmin);

export default router;
