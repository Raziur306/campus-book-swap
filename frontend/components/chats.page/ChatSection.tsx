import {
  ChatSectionContainer,
  ChatSectionWrapper,
} from "@/styled/chat.page.styles";
import React, { useContext, useEffect, useState } from "react";
import { ChatCard } from ".";
import { cookies } from "@/config/Cookies";
import { CommonApiContext } from "@/context/CommonApiContext";
import { ChatSectionPropsType } from "@/types";

const ChatSection = ({ getReceiverId }: ChatSectionPropsType) => {
  const { conversationFetchCall, converSationMessage } =
    useContext(CommonApiContext);
  const [selectedReceiverId, setSelectedReceiverId] = useState<any>("");

  useEffect(() => {
    conversationFetchCall();
  }, []);

  const handleSelect = (id: string) => {
    if (selectedReceiverId != id) {
      getReceiverId(id);
      setSelectedReceiverId(id);
    }
  };

  return (
    <ChatSectionContainer>
      <h1>Chats</h1>
      <ChatSectionWrapper>
        {converSationMessage.map((item: any, index: number) => {
          const { image, name, id } = item.receiver;
          return (
            <ChatCard
              receiverId={id}
              handleSelect={handleSelect}
              isSelected={selectedReceiverId == id}
              text={item.text}
              name={name}
              image={image}
              key={index}
            />
          );
        })}
      </ChatSectionWrapper>
    </ChatSectionContainer>
  );
};

export default ChatSection;
