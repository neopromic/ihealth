import { Router } from "express";
import ClinicController from "../controllers/ClinicController";

const clinicRoutes = Router();

clinicRoutes.get("/", ClinicController.findAll);
clinicRoutes.get("/:id", ClinicController.findById);
clinicRoutes.post("/create", ClinicController.create);
clinicRoutes.patch("/:id", ClinicController.path);
clinicRoutes.delete("/:id", ClinicController.delete);

export default clinicRoutes;
