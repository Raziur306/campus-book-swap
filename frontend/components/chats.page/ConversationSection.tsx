import {
  ChatSectionContainer,
  ChatSectionWrapper,
} from "@/styled/chat.page.styles";
import React, { useContext, useEffect, useState } from "react";
import { ConversationCard } from ".";
import { CommonApiContext } from "@/context/CommonApiContext";

const ChatSection = ({
  getConversationId,
}: {
  getConversationId: (id: string) => void;
}) => {
  const { conversationFetchCall, converSationMessage } =
    useContext(CommonApiContext);
  const [selectConversationId, setSelectConversationId] = useState<any>("");

  useEffect(() => {
    conversationFetchCall();
  }, []);

  const handleSelect = (conversationId: string) => {
    if (conversationId != selectConversationId) {
      setSelectConversationId(conversationId);
      getConversationId(conversationId);
    }
  };

  return (
    <ChatSectionContainer>
      <h1>Chats</h1>
      <ChatSectionWrapper>
        {converSationMessage.map((conversation: any, index: number) => {
          const { id, messages, users, lastMessageAt } = conversation;
          const lastMessage = messages[0];
          const user = users[0];
          return (
            <ConversationCard
              isSelected={id == selectConversationId}
              conversationId={id}
              handleSelect={handleSelect}
              text={lastMessage?.text}
              name={user.name}
              image={user.image}
              key={index}
              lastMessageAt={lastMessageAt}
            />
          );
        })}
        {converSationMessage.length == 0 && (
          <p className="not-found">No conversation found</p>
        )}
      </ChatSectionWrapper>
    </ChatSectionContainer>
  );
};

export default ChatSection;
