import { Router } from "express";
import clinicRoutes from "./modules/clinics/routes/clinic.routes";
import specialtyRoutes from "./modules/specialties/routes/specialty.routes";
import paymentRoutes from "./modules/payments/routes/payment.routes";
import ratingRoutes from "./modules/clinics/routes/rating.routes";

const routes = Router();

routes.use("/clinics", clinicRoutes);
routes.use("/specialties", specialtyRoutes);
routes.use("/payments", paymentRoutes);
routes.use("/rating", ratingRoutes);

export default routes;
