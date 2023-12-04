import { io, prisma } from "../config";
import express from "express";

const sendMessage = async (req: express.Request, res: express.Response) => {
  try {
    const user = res.locals.user;
    const { text, receiverId } = req.body;
    const message = await prisma.message.create({
      data: {
        text: text,
        senderId: user.id,
        receiverId: receiverId,
      },
    });
    io.emit(`${receiverId}`, message);
    res.status(201).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessage = async (req: express.Request, res: express.Response) => {
  try {
    const user = res.locals.user;
    const { userId } = req.params;
    const allMessages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: user.id },
          { senderId: user.id, receiverId: userId },
        ],
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    res.status(200).json({ messages: allMessages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const conversation = async (req: express.Request, res: express.Response) => {
  try {
    const user = res.locals.user;
    const conversations = await prisma.message.findMany({
      where: {
        OR: [{ senderId: user.id }, { receiverId: user.id }],
        receiverId: {
          not: user.id,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      distinct: ["senderId", "receiverId"],
      include: {
        receiver: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    res.status(200).json({ conversation: conversations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { sendMessage, getMessage, conversation };
