import express from "express";

import { app } from "./config";
import { userRouter } from "./routes";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);

//default response
app.use("*", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "Server is running" });
});
