import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../../../middlewares/auth";

const userRouter = Router();
const userController = new UserController();

// Handlers tipados
const handlers = {
  register: async (req: Request, res: Response) => {
    await userController.register(req, res);
  },
  login: async (req: Request, res: Response) => {
    await userController.login(req, res);
  },
  getProfile: async (req: Request, res: Response) => {
    await userController.getProfile(req, res);
  },
  updateProfile: async (req: Request, res: Response) => {
    await userController.updateProfile(req, res);
  },
  deleteProfile: async (req: Request, res: Response) => {
    await userController.delete(req, res);
  },
};

// Rotas públicas
userRouter.post("/register", handlers.register);
userRouter.post("/login", handlers.login);

// Rotas protegidas
userRouter.get("/profile", handlers.getProfile);
userRouter.put("/profile", handlers.updateProfile);
userRouter.delete("/profile", handlers.deleteProfile);

export { userRouter };
