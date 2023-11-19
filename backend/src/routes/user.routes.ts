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

userRouter.get("/login", loginUser);

userRouter.post("/verify-email/:id", verifyEmail);

userRouter.post("/donate-book", auth, contributeBook);

userRouter.post("/request-book", auth, requestBook);

userRouter.get("/books", auth, getAllBooks);

userRouter.get("/contribution", auth, getContribution);

export { userRouter };
