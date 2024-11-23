import { Router } from "express";
import ClinicController from "../controllers/ClinicController";

const clinicRoutes = Router();

clinicRoutes.post("/create", ClinicController.create);

export default clinicRoutes;