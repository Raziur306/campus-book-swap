import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

const server = app.listen(PORT, async () => {
  console.log("Server is running.");
});

export { app, server };
