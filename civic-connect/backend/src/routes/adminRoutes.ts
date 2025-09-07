import { Router } from "express";
import { loginAdmin } from "../controllers/adminControllers";

const router = Router();
router.post("/login", loginAdmin);

export default router;
