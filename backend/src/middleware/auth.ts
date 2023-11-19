import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
dotenv.config();

const auth = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      const user =  jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      if (user) {
        next();
      } else {
        res.status(401).json({ status: false, message: "Unauthorized user." });
      }
    } else {
      res.status(401).json({ status: false, message: "Unauthorized user." });
    }
  } catch (error) {
    res.status(401).json({
      status: false,
      message: "Something went wrong from authorization",
    });
  }
};

export = auth;