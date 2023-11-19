import express from "express";
import bcrypt from "bcrypt";
import { prisma } from "../config";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "./email.controller";
import { JwtDecodedType } from "types";

const JWT_KEY = process.env.JWT_PRIVATE_KEY;
const saltRound = 10;

const registerUser = async (req: express.Request, res: express.Response) => {
  try {
    const { name, email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (findUser) {
      return res
        .status(400)
        .json({ response: false, message: "User already exist" });
    }

    const encryptedPass = await bcrypt.hash(password, saltRound);

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: encryptedPass,
      },
    });

    await sendVerificationEmail(newUser.id, newUser.email, newUser.name);

    res
      .status(201)
      .json({ response: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

//user login controller
const loginUser = async (req: express.Request, res: express.Response) => {
  try {
    const { password, email } = req.body;
    const exitingUser = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    });

    if (!exitingUser.verified) {
      return res
        .status(403)
        .json({ status: false, message: "Please verify your email" });
    }

    const passVerify = await bcrypt.compare(password, exitingUser.password);

    if (!passVerify) {
      return res
        .status(404)
        .json({ response: false, message: "User not found." });
    }

    const token = jwt.sign({ id: exitingUser.id, email }, JWT_KEY);

    res.status(200).json({ response: true, token });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

//verify email
const verifyEmail = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        verified: true,
      },
    });

    res
      .status(201)
      .json({ response: true, message: "Email verification successful." });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

//contribute books

const contributeBook = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    if (!decoded?.id) {
      return res.status(403).json({ status: false, message: "Access denied." });
    }

    const {
      bookEdition,
      authorName,
      publisher,
      publishedYear,
      purpose,
      coverImg,
    } = req.body;

    await prisma.book.create({
      data: {
        bookEdition,
        authorName,
        publishedYear,
        purpose,
        coverImg,
        publisher,
        userId: decoded.id,
      },
    });

    res
      .status(201)
      .json({ response: true, message: "Contribution successful." });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

//book request
const requestBook = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    if (!decoded?.id) {
      return res.status(403).json({ status: false, message: "Access denied." });
    }

    const { bookId } = req.body;

    const isUserBookOwner = await prisma.book.findFirst({
      where: {
        id: bookId,
        userId: decoded?.id,
      },
    });

    if (isUserBookOwner) {
      return res.status(403).json({
        status: false,
        message: "You can't make request on your own book.",
      });
    }

    await prisma.request.create({
      data: {
        bookId,
        userId: decoded?.id,
      },
    });

    res
      .status(201)
      .json({ response: true, message: "Request send successfully." });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

//get all books
const getAllBooks = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    if (!decoded?.id) {
      return res.status(403).json({ status: false, message: "Access denied." });
    }

    const userEmail = decoded?.email || "";
    const userDomain = userEmail.split("@")[1];

    const books = await prisma.book.findMany({
      where: {
        userId: {
          not: decoded?.id,
        },
        author: {
          email: {
            endsWith: userDomain,
          },
        },
      },
    });

    res.status(201).json({ response: true, result: books });
  } catch (error) {
    res
      .status(500)
      .json({ response: false, message: error.message, result: [] });
  }
};

//user contribution
const getContribution = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    if (!decoded?.id) {
      return res.status(403).json({ status: false, message: "Access denied." });
    }

    const books = await prisma.book.findMany({
      where: {
        userId: decoded?.id,
      },
      include: {
        request: {
          include: {
            User: {
              select: {
                name:true,
                email:true,
              },
            },
          },
        },
      },
    });

    res.status(201).json({ response: true, result: books });
  } catch (error) {
    res
      .status(500)
      .json({ response: false, message: error.message, result: [] });
  }
};

export {
  registerUser,
  loginUser,
  verifyEmail,
  contributeBook,
  requestBook,
  getAllBooks,
  getContribution,
};
