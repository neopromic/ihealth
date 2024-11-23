import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("server running");
});