import {
  ChatSectionContainer,
  ChatSectionWrapper,
} from "@/styled/chat.page.styles";
import React, { useEffect } from "react";
import { ChatCard } from ".";
import { io } from "socket.io-client";

const ChatList = [
  {
    name: "Jonathan",
    message: "Hello How are you?",
    image: "/images/default.jpg",
  },
  {
    name: "Jonathan",
    message: "Hello How are you?",
    image: "/images/default.jpg",
  },
];

const ChatSection = () => {
  const END_POINT = process.env.NEXT_PUBLIC_SERVER_END_POINT;

  useEffect(() => {
    io(`${END_POINT}`);
  }, []);

  return (
    <ChatSectionContainer>
      <h1>Chats</h1>
      <ChatSectionWrapper>
        {ChatList.map((item: any, index: number) => {
          return <ChatCard key={index} />;
        })}
      </ChatSectionWrapper>
    </ChatSectionContainer>
  );
};

export default ChatSection;
