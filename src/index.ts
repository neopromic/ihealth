import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectionDB } from "./database/mongo";
import cors from "cors";
connectionDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("server running");
});