import { ChatCardWrapper } from "@/styled/chat.page.styles";
import Image from "next/image";
import React from "react";

const ChatCard = () => {
  return (
    <ChatCardWrapper>
      <Image
        className="rounded-full p-1"
        width={70}
        height={50}
        alt="Profile"
        src={"/images/avatar.jpg"}
      />
      <div className="flex flex-col w-full">
        <h4>Jonathan</h4>
        <p>Hello how are you?</p>
      </div>
    </ChatCardWrapper>
  );
};

export default ChatCard;
