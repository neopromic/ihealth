import { Router } from "express";
import PaymentController from "../controllers/PaymentController";

const paymentRoutes = Router();

paymentRoutes.get("/", PaymentController.findAll);
paymentRoutes.get("/:id", PaymentController.findById);
paymentRoutes.post("/create", PaymentController.create);
paymentRoutes.patch("/:id", PaymentController.path);
paymentRoutes.delete("/:id", PaymentController.delete);

export default paymentRoutes;
