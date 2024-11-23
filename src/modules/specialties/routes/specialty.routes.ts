import { Router } from "express";
import SpecialtyController from "../controllers/SpecialtyController";

const specialtyRoutes = Router();

specialtyRoutes.get("/", SpecialtyController.findAll);
specialtyRoutes.get("/:id", SpecialtyController.findById);
specialtyRoutes.post("/create", SpecialtyController.create);
specialtyRoutes.patch("/:id", SpecialtyController.path);
specialtyRoutes.delete("/:id", SpecialtyController.delete);

export default specialtyRoutes;
