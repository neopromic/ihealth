import { Router } from "express";
import UserController from "../controllers/UserController";
import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";

const userRoutes = Router();

userRoutes.post("/create", UserController.create);
userRoutes.get("/", UserController.findAll);
userRoutes.use(ensureAuthenticated);
userRoutes.get("/:id", UserController.findById);
userRoutes.patch("/:id", UserController.path);
userRoutes.delete("/:id", UserController.delete);

export default userRoutes;
