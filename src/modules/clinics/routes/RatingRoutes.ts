import { Router, Request, Response, NextFunction } from "express";
import RatingController from "../controllers/RatingController";

const routes = Router();

routes.get("/", (req: Request, res: Response, next: NextFunction) => {
    new RatingController(res, req, next).get(req, res, next);
});

routes.post("/create", (req: Request, res: Response, next: NextFunction) => {
    new RatingController(res, req, next).post(req, res, next);
})

routes.put("/:id", (req: Request, res: Response, next: NextFunction) => {
    new RatingController(res, req, next).put(req, res, next);
})

routes.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    new RatingController(res, req, next).delete(req, res, next);
})

export default routes;