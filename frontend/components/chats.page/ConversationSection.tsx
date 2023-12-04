import { cookies } from "@/config/Cookies";
import { SocketContext } from "@/context";
import { CommonApiContext } from "@/context/CommonApiContext";
import {
  ConversationContainer,
  ConversationInputFieldWrapper,
  ConversationProfileWrapper,
  ConversationReceivedMsg,
  ConversationSendMsg,
  ConversationWrapper,
} from "@/styled/chat.page.styles";
import { ConversationSectionPropsType } from "@/types";
import { verifyToken } from "@/utils/tokenverifier";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const ConversationSection = ({ receiverId }: ConversationSectionPropsType) => {
  const { converSationMessage } = useContext(CommonApiContext);
  const { socket } = useContext(SocketContext);
  const chatBoxRef = useRef<HTMLDivElement | any>(null);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = cookies.get("user_token");
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any>({});

  const selectedConversation = converSationMessage.find(
    (item: any) => item.receiver.id === receiverId
  );

  const decodeJWT = async () => {
    const decoded = await verifyToken(token);
    setCurrentUser(decoded);
  };

  const getMessageCall = async () => {
    try {
      const res = await fetch(`${BASE_URL}/message/${receiverId}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
      }
    } catch (error) {
      console.log("Message fetching error", error);
    }
  };
  useEffect(() => {
    getMessageCall();
  }, [receiverId]);

  const scrollToBottom = () => {
    try {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    } catch (error) {}
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.length == 0) {
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/send-message`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          text: newMessage.trim(),
          receiverId: receiverId,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setMessages([...messages, data.message]);
        setNewMessage("");
      }
    } catch (error) {
      console.log("Send message error", error);
    }
  };

  useEffect(() => {
    decodeJWT();
  }, []);

  useEffect(() => {
    socket?.on(`${currentUser.id}`, (arg: any) => {
      if (arg) {
        setMessages([...messages, arg]);
      }
    });

    return () => {
      socket?.off(currentUser.id);
    };
  });

  return (
    <ConversationContainer>
      {receiverId?.length == 0 && <span> No conversation selected</span>}
      {receiverId?.length != 0 && (
        <>
          <ConversationProfileWrapper>
            <Image
              className="rounded-full"
              width={50}
              height={50}
              alt="Profile"
              src={
                selectedConversation?.receiver.image || "/images/default.jpg"
              }
            />
            <h3>{selectedConversation?.receiver.name}</h3>
          </ConversationProfileWrapper>
          <ConversationWrapper ref={chatBoxRef}>
            {messages?.map((item: any, index: number) => {
              const { senderId, text, createdAt } = item;
              return senderId != receiverId ? (
                <ConversationSendMsg key={index}>
                  <p>{text}</p>
                </ConversationSendMsg>
              ) : (
                <ConversationReceivedMsg key={index}>
                  <p>{text}</p>
                </ConversationReceivedMsg>
              );
            })}
          </ConversationWrapper>
          <ConversationInputFieldWrapper onSubmit={sendMessage}>
            <input
              value={newMessage}
              onChange={handleChange}
              placeholder="Enter message..."
            />
            <button
              type="submit"
              className={`${newMessage.length > 0 ? "active" : ""}`}
            >
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
        </>
      )}
    </ConversationContainer>
  );
};

export default ConversationSection;
