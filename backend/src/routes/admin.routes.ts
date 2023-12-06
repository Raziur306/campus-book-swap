import {
  getGeneratedReport,
  getStatisticInfo,
  getUsers,
  recentBooks,
} from "../controller";
import express from "express";
import auth from "../middleware/auth";
const adminRouter = express.Router();

adminRouter.get("/statistic-info", auth, getStatisticInfo);

adminRouter.get("/users", auth, getUsers);

adminRouter.get("/generate-report", auth, getGeneratedReport);

adminRouter.get("/recent-books", auth, recentBooks);

export { adminRouter };
