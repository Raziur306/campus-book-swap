import {
  deleteBook,
  getAllBooksAdmin,
  getApprovedBooks,
  getGeneratedReport,
  getPendingBooks,
  getStatisticInfo,
  getUsers,
  recentBooks,
  updateBookStatus,
  deleteUser,
  getComplain,
  bookReportByUser,
} from "../controller";
import express from "express";
import auth from "../middleware/auth";
const adminRouter = express.Router();

adminRouter.get("/statistic-info", auth, getStatisticInfo);

adminRouter.get("/users", auth, getUsers);

adminRouter.get("/generate-report", auth, getGeneratedReport);

adminRouter.get("/recent-books", auth, recentBooks);

adminRouter.get("/all-books", auth, getAllBooksAdmin);

adminRouter.get("/pending-books", auth, getPendingBooks);

adminRouter.get("/pending-books", auth, getPendingBooks);

adminRouter.get("/approved-books", auth, getApprovedBooks);

adminRouter.post("/delete-book/:bookId", auth, deleteBook);

adminRouter.post("/update-book-status/:bookId", auth, updateBookStatus);

adminRouter.post("/delete-user/:userId", auth, deleteUser);

adminRouter.get("/complain", auth, getComplain);

adminRouter.get("/report-by-user", auth, bookReportByUser);

export { adminRouter };
