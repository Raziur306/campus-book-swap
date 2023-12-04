import { cookies } from "@/config/Cookies";
import { SocketContext } from "@/context";
import { CommonApiContext } from "@/context/CommonApiContext";
import {
  ChatModalContainer,
  ChatBodyContainer,
  SendMsg,
  ReceivedMsg,
  ChatModalInputWrapper,
} from "@/styled/common";
import { ChatModalPropsType } from "@/types";
import { verifyToken } from "@/utils/tokenverifier";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
const ChatModal = ({
  handleChatModalClose,
  receiverId,
}: ChatModalPropsType) => {
  const { socket } = useContext(SocketContext);
  const { conversationFetchCall, converSationMessage } =
    useContext(CommonApiContext);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = cookies.get("user_token");
  const [messages, setMessages] = useState<any>([]);
  const chatBoxRef = useRef<HTMLDivElement | any>(null);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState<any>({});

  const selectedConversation = converSationMessage.find(
    (item: any) => item.receiver.id === receiverId
  );

  const decodeJWT = async () => {
    const decoded = await verifyToken(token);
    setCurrentUser(decoded);
  };

  const scrollToBottom = () => {
    try {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    } catch (error) {}
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAllMessage = async () => {
    try {
      const res = await fetch(`${BASE_URL}/message/${receiverId}`, {
        method: "GET",
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
      console.log("Chat Modal Error", error);
    }
  };

  useEffect(() => {
    decodeJWT();
    conversationFetchCall();
    getAllMessage();
  }, []);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.length == 0) {
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
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
      console.log("Modal message error");
    }
  };

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
    <div className=" fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-gray-200 rounded-lg shadow min-h-36 overflow-hidden">
          <ChatModalContainer>
            <div className="flex flex-row items-center justify-between bg-white p-2">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  className="rounded-full"
                  width={50}
                  height={50}
                  src={
                    selectedConversation?.receiver.image ||
                    "/images/default.jpg"
                  }
                  alt={"Chat Profile"}
                />
                <h3>{selectedConversation?.receiver.name}</h3>
              </div>
              <button
                onClick={() => handleChatModalClose()}
                type="button"
                className=" text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <ChatBodyContainer ref={chatBoxRef}>
              {messages.length == 0 && <span>No conversation found</span>}
              {messages?.map((item: any, index: number) => {
                const { senderId, text, createdAt } = item;
                return senderId != receiverId ? (
                  <SendMsg key={index}>
                    <p>{text}</p>
                  </SendMsg>
                ) : (
                  <ReceivedMsg key={index}>
                    <p>{text}</p>
                  </ReceivedMsg>
                );
              })}
            </ChatBodyContainer>
            <ChatModalInputWrapper onSubmit={sendMessage}>
              <input
                onChange={handleMessageChange}
                type="text"
                placeholder="Type your message..."
                value={newMessage}
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
            </ChatModalInputWrapper>
          </ChatModalContainer>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
