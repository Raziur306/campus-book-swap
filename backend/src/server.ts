import express from "express";
import cors from "cors";

import { app } from "./config";
import { userRouter } from "./routes";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/firebase";

initializeApp(firebaseConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", userRouter);

//default response
app.use("*", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "Server is running" });
});
