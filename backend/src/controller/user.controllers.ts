import express from "express";
import bcrypt from "bcrypt";
import { prisma } from "../config";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "./email.controller";
import { JwtDecodedType } from "types";
import { v4 as uuidv4 } from "uuid";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

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
      .status(204)
      .json({ response: true, message: "Email verification successful." });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

//contribute books
const contributeBook = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ").pop();
    const { id } = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded");
    }
    const fileExtension = file.originalname.split(".").pop();
    const fileName = Date.now() + uuidv4();
    const storage = getStorage();
    const storageRef = ref(storage, `cover-page/${fileName}.${fileExtension}`);
    const metadata = {
      contentType: req.file.mimetype,
    };
    const snapshot = await uploadBytesResumable(
      storageRef,
      req.file.buffer,
      metadata
    );

    const downloadUrl = await getDownloadURL(snapshot.ref);
    if (!downloadUrl) {
      return res
        .status(404)
        .json({ status: false, message: "Something went wrong" });
    }

    const {
      title,
      bookEdition,
      authorName,
      publishedYear,
      publisher,
      price,
      purpose,
    } = req.body;

    await prisma.book.create({
      data: {
        title: title,
        bookEdition: Number(bookEdition),
        authorName: authorName,
        publisher: publisher,
        publishedYear: Number(publishedYear),
        price: Number(price),
        purpose: purpose,
        coverImg: downloadUrl,
        userId: "655cf417e0f39cb02b7f1ff2",
      },
    });

    return res
      .status(201)
      .json({ status: true, message: "Book donation successful." });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

//get all books
const getAllBooks = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    const userEmail = decoded?.email || "";
    const userDomain = userEmail.split("@")[1];

    const books = await prisma.book.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userId: {
          not: decoded?.id,
        },
        status: {
          not: "Pending",
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
    res.status(500).json({ response: false, message: error.message });
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
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(201).json({ response: true, result: books });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

const getProfileData = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    const data = await prisma.user.findFirst({
      where: {
        id: decoded.id,
      },
      select: {
        name: true,
        image: true,
        studentId: true,
        email: true,
        phone: true,
        bio: true,
      },
    });

    res.status(201).json({ response: true, result: data });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

const updateProfile = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    const { name, email, studentId, phone, bio, image } = req.body;
    await prisma.user.update({
      where: {
        id: decoded.id,
      },
      data: {
        name,
        email,
        studentId,
        bio,
        image: image,
        phone: String(phone),
      },
    });
    res.status(204).json({ response: true, message: "Successfully updated" });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

const updatePassword = async (req: express.Request, res: express.Response) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, JWT_KEY) as JwtDecodedType;

    const exitingUser = await prisma.user.findFirst({
      where: {
        id: decoded.id,
      },
    });

    const { prevPassword, newPassword } = req.body;

    const matching = await bcrypt.compare(prevPassword, exitingUser.password);

    if (!matching) {
      return res
        .status(403)
        .json({ response: false, message: "Password mismatched" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, saltRound);

    await prisma.user.update({
      where: {
        id: decoded.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    res
      .status(204)
      .json({ response: true, message: "Password successfully updated" });
  } catch (error) {
    res.status(500).json({ response: false, message: error.message });
  }
};

export {
  registerUser,
  loginUser,
  verifyEmail,
  contributeBook,
  getAllBooks,
  getContribution,
  getProfileData,
  updateProfile,
  updatePassword,
};
