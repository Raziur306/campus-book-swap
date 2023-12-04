import express from "express";
import cors from "cors";

import { app } from "./config";
import { adminRouter, userRouter } from "./routes";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/firebase";

initializeApp(firebaseConfig);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());

app.use("/api", userRouter);

app.use("/api/admin", adminRouter);

//default response
app.use("*", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "Server is running" });
});
