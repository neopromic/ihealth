import { Router } from "express";
import clinicRoutes from "./modules/clinics/routes/clinic.routes";

const routes = Router();

routes.use("/clinics", clinicRoutes);

export default routes;