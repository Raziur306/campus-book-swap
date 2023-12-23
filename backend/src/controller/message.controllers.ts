import { io, prisma } from "../config";
import express from "express";

const sendMessage = async (req: express.Request, res: express.Response) => {
  try {
    const user = res.locals.user;
    const { text } = req.body;
    let conversationId = req.body.conversationId;

    //create new message with conversation ORM
    const newMessage = await prisma.message.create({
      data: {
        senderId: user.id,
        text,
        conversationId,
      },
    });

    //update conversation with current timestamp
    const conversation = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
      },
    });
    //socket chat trigger
    io.emit(conversationId, newMessage);

    const receiverId = conversation.userIds.filter((item: any) => {
      return item !== user.id;
    });

    //update notification
     await prisma.user.update({
      where: {
        id: receiverId[0],
      },
      data: {
        chat_notification: { increment: 1 },
      },
    });

    io.emit(receiverId[0], "Notification socket.io trigger");

    res.status(201).json({ newMessage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//find all conversation belongs a the user
const conversation = async (req: express.Request, res: express.Response) => {
  try {
    const user = res.locals.user;

    const conversations = await prisma.conversation.findMany({
      where: {
        userIds: {
          has: user.id,
        },
        messages: {
          some: {},
        },
      },
      orderBy: {
        lastMessageAt: "desc",
      },
      select: {
        id: true,
        createdAt: true,
        lastMessageAt: true,
        users: {
          where: {
            id: {
              not: user.id,
            },
          },
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        messages: {
          select: {
            id: true,
            text: true,
            createdAt: true,
            senderId: true,
            sender: {
              select: {
                id: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
    });

    res.status(200).json({ conversations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleConversationMessage = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = res.locals.user;
    const { conversationId } = req.params;
    const conversation = await prisma.conversation.findFirst({
      where: {
        id: conversationId,
      },
      select: {
        id: true,
        lastMessageAt: true,
        createdAt: true,
        users: {
          where: {
            id: {
              not: user.id,
            },
          },
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        messages: {
          select: {
            id: true,
            text: true,
            createdAt: true,
            senderId: true,
            sender: {
              select: {
                id: true,
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    res.status(200).json({ conversation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findConversationByUserId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = res.locals.user;
    const { receiverId } = req.params;

    let conversation: any = await prisma.conversation.findFirst({
      where: {
        userIds: {
          hasEvery: [user.id, receiverId],
        },
      },
      include: {
        users: {
          where: {
            id: {
              not: user.id,
            },
          },
          select: {
            name: true,
            image: true,
          },
        },
        messages: {
          select: {
            id: true,
            text: true,
            createdAt: true,
            senderId: true,
            sender: {
              select: {
                id: true,
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          userIds: [user.id, receiverId],
        },
      });
    }
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  sendMessage,
  getSingleConversationMessage,
  conversation,
  findConversationByUserId,
};
