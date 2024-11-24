import { Router } from "express";
import SessionsController from "../controllers/SessionsController";

const authRoutes = Router();

authRoutes.post("/login", SessionsController.create);

export default authRoutes;
