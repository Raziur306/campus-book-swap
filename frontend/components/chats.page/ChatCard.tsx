import { ChatCardWrapper } from "@/styled/chat.page.styles";
import { ChatCardPropsType } from "@/types";
import Image from "next/image";
import React from "react";

const ChatCard = ({ name, image, text, isSelected, handleSelect, receiverId }: ChatCardPropsType) => {
  return (
    <ChatCardWrapper onClick={()=>handleSelect(receiverId)} className={`${isSelected == true ? "active" : ""}`}>
      <Image
        className="rounded-full p-1"
        width={70}
        height={50}
        alt="Profile"
        src={image || "/images/default.jpg"}
      />
      <div className="flex flex-col w-full">
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
    </ChatCardWrapper>
  );
};

export default ChatCard;
