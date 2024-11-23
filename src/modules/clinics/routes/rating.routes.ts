import { Router } from "express";
import RatingController from "../controllers/RatingController";

const ratingRoutes = Router();

ratingRoutes.get("/", RatingController.findAll);
ratingRoutes.post("/create", RatingController.create);
ratingRoutes.patch("/:id", RatingController.path);
ratingRoutes.delete("/:id", RatingController.delete);

export default ratingRoutes;
