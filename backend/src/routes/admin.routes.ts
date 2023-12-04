import { getStatisticInfo, getUsers } from "../controller";
import express from "express";
import auth from "../middleware/auth";
const adminRouter = express.Router();

adminRouter.get("/statistic-info", auth, getStatisticInfo);

adminRouter.get("/users", auth, getUsers);

export { adminRouter };
