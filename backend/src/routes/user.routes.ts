import multer from "multer";
import auth from "../middleware/auth";

import {
  contributeBook,
  getAllBooks,
  getContribution,
  loginUser,
  registerUser,
  requestBook,
  verifyEmail,
} from "../controller";

import express from "express";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/verify-email/:id", verifyEmail);

userRouter.post("/request-book", auth, requestBook);

userRouter.get("/books", auth, getAllBooks);

//upload file and store contribute data
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
userRouter.post(
  "/donate-book",
  auth,
  upload.single("book-cover"),
  contributeBook
);
export { userRouter };
