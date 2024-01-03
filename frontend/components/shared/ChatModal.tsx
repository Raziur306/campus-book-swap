import { cookies } from "@/config/Cookies";
import { socket } from "@/config/Socket";
import { CommonApiContext } from "@/context/CommonApiContext";
import Spinner from "@/public/svg/spinner";
import {
  ChatModalContainer,
  ChatBodyContainer,
  SendMsg,
  ReceivedMsg,
  ChatModalInputWrapper,
} from "@/styled/common";
import { ChatModalPropsType } from "@/types";
import { formatChatTimestamp } from "@/utils/formartDate";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
const ChatModal = ({
  handleChatModalClose,
  receiverId,
}: ChatModalPropsType) => {
  const [conversation, setConversation] = useState<any>({});
  const token = cookies.get("user_token");
  const [messages, setMessages] = useState<any>([]);
  const chatBoxRef = useRef<HTMLDivElement | any>(null);
  const [newMessage, setNewMessage] = useState("");
  const [receiverInfo, setReceiverInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const scrollToBottom = () => {
    try {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    } catch (error) {}
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    try {
      setReceiverInfo(conversation?.users[0]);
      setMessages(conversation?.messages);
    } catch (error) {
      console.log(error);
    }
  }, [conversation]);

  const getConversation = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/conversation/${receiverId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setConversation(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Chat Modal Error", error);
    }
  };

  useEffect(() => {
    getConversation();
  }, []);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.length == 0) {
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/send-message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            text: newMessage.trim(),
            conversationId: conversation.id,
          }),
        }
      );

      if (res.ok) {
        setNewMessage("");
        const data = await res.json();
        setMessages([...messages, data.newMessage]);
      }
    } catch (error) {
      console.log("Modal message error");
    }
  };

  useEffect(() => {
    try {
      socket?.on(`${conversation.id}`, (arg: any) => {
        if (arg) {
          setMessages([...messages, arg]);
        }
      });

      return () => {
        socket?.off(conversation.id);
      };
    } catch (error) {
      console.log("Chat modal socket io error", error);
    }
  });

  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="relative w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow min-h-36 overflow-hidden">
          <ChatModalContainer>
            <div className="flex flex-row items-center justify-between bg-[#f66539] p-2">
              {!isLoading && (
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={receiverInfo?.image || "/images/default.jpg"}
                    alt={"Chat Profile"}
                  />
                  <h3 className="text-white">{receiverInfo?.name}</h3>
                </div>
              )}
              <button
                onClick={() => handleChatModalClose()}
                type="button"
                className="border-2 bg-white ml-auto text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              {(messages == undefined || messages?.length == 0) && (
                <div className="flex flex-col gap-2 items-center justify-center m-auto">
                  {isLoading && <Spinner />}
                  <span>No conversation found</span>
                </div>
              )}
              {messages?.length > 0 && (
                <>
                  {messages?.map((item: any, index: number) => {
                    const { senderId, text, createdAt } = item;
                    return senderId != receiverId ? (
                      <SendMsg key={index}>
                        <span>{formatChatTimestamp(createdAt)}</span>
                        <p>{text}</p>
                      </SendMsg>
                    ) : (
                      <ReceivedMsg key={index}>
                        <span>{formatChatTimestamp(createdAt)}</span>
                        <p>{text}</p>
                      </ReceivedMsg>
                    );
                  })}
                </>
              )}
            </ChatBodyContainer>
            {!isLoading && (
              <ChatModalInputWrapper onSubmit={sendMessage}>
                <textarea
                  onChange={handleMessageChange}
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
            )}
          </ChatModalContainer>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
