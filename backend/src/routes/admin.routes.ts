import { getGeneratedReport, getStatisticInfo, getUsers } from "../controller";
import express from "express";
import auth from "../middleware/auth";
const adminRouter = express.Router();

adminRouter.get("/statistic-info", auth, getStatisticInfo);

adminRouter.get("/users", auth, getUsers);

adminRouter.get("/generate-report", auth, getGeneratedReport);

export { adminRouter };
