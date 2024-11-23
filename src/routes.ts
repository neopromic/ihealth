import { Router } from "express";
import clinicRoutes from "./modules/clinics/routes/clinic.routes";
import specialtyRoutes from "./modules/specialties/routes/specialty.routes";

const routes = Router();

routes.use("/clinics", clinicRoutes);
routes.use("/specialties", specialtyRoutes);

export default routes;
