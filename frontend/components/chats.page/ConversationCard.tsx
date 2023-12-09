import { ChatCardWrapper } from "@/styled/chat.page.styles";
import { ChatCardPropsType } from "@/types";
import { formatChatTimestamp } from "@/utils/formartDate";
import Image from "next/image";
import React from "react";

const ConversationCard = ({
  name,
  image,
  text,
  isSelected,
  handleSelect,
  lastMessageAt,
  conversationId,
}: ChatCardPropsType) => {
  return (
    <ChatCardWrapper
      onClick={() => handleSelect(conversationId)}
      className={`${isSelected == true ? "active" : ""}`}
    >
      <Image
        className="rounded-full p-1"
        width={70}
        height={50}
        alt="Profile"
        src={image || "/images/default.jpg"}
      />
      <div className="flex flex-col w-full">
        <h4>{name}</h4>
        <div className="flex flex-row gap-1">
          <p>{text}</p>
          <span> · {formatChatTimestamp(lastMessageAt)}</span>
        </div>
      </div>
    </ChatCardWrapper>
  );
};

export default ConversationCard;
