import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectionDB } from "./database/mongo";
import cors from "cors";
import { router } from "./routes";
import { authMiddleware } from "./middlewares/auth";

const app = express();

connectionDB();

app.use(cors());
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
