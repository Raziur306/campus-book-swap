import multer from "multer";
import auth from "../middleware/auth";

import {
  contributeBook,
  getAllBooks,
  getContribution,
  getProfileData,
  loginUser,
  registerUser,
  verifyEmail,
  updateProfile,
  updatePassword,
  sendMessage,
  getMessage,
  conversation,
  resetPasswordRequest,
  resetPassword,
} from "../controller";

import express from "express";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/verify-email/:id", verifyEmail);

userRouter.get("/books", auth, getAllBooks);

userRouter.get("/profile", auth, getProfileData);

userRouter.put("/profile", auth, updateProfile);

userRouter.put("/password-update", auth, updatePassword);

userRouter.get("/contribution", auth, getContribution);

userRouter.post("/send-message", auth, sendMessage);

userRouter.get("/message/:userId", auth, getMessage);

userRouter.get("/conversation", auth, conversation);

userRouter.post("/forget-password", resetPasswordRequest);

userRouter.post("/reset-password/:userId", resetPassword);

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
