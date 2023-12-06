import { generateReport } from "../utils";
import { prisma } from "../config";
import express from "express";
const getStatisticInfo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = res.locals.user;
    if (user.role != "admin") {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const totalUser = await prisma.user.count();
    const totalBook = await prisma.book.count({
      where: {
        status: "Approved",
      },
    });
    const pendingBooks = await prisma.book.count({
      where: {
        status: "Pending",
      },
    });
    const totalChats = await prisma.message.count();
    res.status(200).json({ totalUser, totalBook, pendingBooks, totalChats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const user = res.locals.user;
    if (user.role != "admin") {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        name: true,
        image: true,
        createdAt: true,
      },
      take: 5,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGeneratedReport = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = res.locals.user;
    if (user.role != "admin") {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const totalUsers = await prisma.user.count();
    const totalBooks = await prisma.book.count();
    const approvedBooks = await prisma.book.count({
      where: {
        status: "Approved",
      },
    });
    const pendingBooks = await prisma.book.count({
      where: {
        status: "Pending",
      },
    });

    const reportLink = await generateReport(
      totalBooks,
      approvedBooks,
      pendingBooks,
      totalUsers
    );

    res.status(200).json({ report_link: reportLink });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const recentBooks = async (req: express.Request, res: express.Response) => {
  try {
    const user = res.locals.user;
    if (user.role != "admin") {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const books = await prisma.book.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getStatisticInfo, getUsers, getGeneratedReport, recentBooks };
