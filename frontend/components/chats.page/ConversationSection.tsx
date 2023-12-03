import {
  ConversationContainer,
  ConversationInputFieldWrapper,
  ConversationProfileWrapper,
  ConversationReceivedMsg,
  ConversationSendMsg,
  ConversationWrapper,
} from "@/styled/chat.page.styles";
import Image from "next/image";
import React, { useRef } from "react";

const ConversationSection = () => {
  const chatBoxRef = useRef<HTMLDivElement | any>(null);

  const scrollToBottom = () => {
    try {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    } catch (error) {
      console.log("Scroll Error", error);
    }
  };

  scrollToBottom();

  return (
    <ConversationContainer>
      <ConversationProfileWrapper>
        <Image
          className="rounded-full"
          width={50}
          height={50}
          alt="Profile"
          src={"/images/avatar.jpg"}
        />
        <h3>Raziur Rahaman Ronju</h3>
      </ConversationProfileWrapper>
      <ConversationWrapper ref={chatBoxRef}>
        <ConversationSendMsg>
          <p>Hello?</p>
        </ConversationSendMsg>
        <ConversationReceivedMsg>
          <p>Hello?</p>
        </ConversationReceivedMsg>
      </ConversationWrapper>
      <ConversationInputFieldWrapper>
        <input placeholder="Enter message..." />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </ConversationInputFieldWrapper>
    </ConversationContainer>
  );
};

export default ConversationSection;
