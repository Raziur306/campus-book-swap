import { cookies } from "@/config/Cookies";
import { socket } from "@/config/Socket";
import { CommonApiContext } from "@/context/CommonApiContext";
import Spinner from "@/public/svg/spinner";
import {
  ConversationContainer,
  ConversationInputFieldWrapper,
  ConversationProfileWrapper,
  ConversationReceivedMsg,
  ConversationReport,
  ConversationSendMsg,
  ConversationWrapper,
} from "@/styled/chat.page.styles";
import { ConversationSectionPropsType } from "@/types";
import { formatChatTimestamp } from "@/utils/formartDate";
import { verifyToken } from "@/utils/tokenverifier";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ReportModal } from ".";

const ConversationSection = ({
  conversationId,
}: ConversationSectionPropsType) => {
  const chatBoxRef = useRef<HTMLDivElement | any>(null);
  const token = cookies.get("user_token");
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any>({});
  const [conversation, setConversation] = useState<any>({});
  const [receiverInfo, setReceiverInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const decodeJWT = async () => {
    const decoded = await verifyToken(token);
    setCurrentUser(decoded);
  };

  useEffect(() => {
    try {
      setMessages(conversation.messages);
      setReceiverInfo(conversation.users[0]);
      setIsLoading(false);
    } catch (error) {}
  }, [conversation]);

  const getConversationMessage = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/single-conversation-message/${conversationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        setConversation((await res.json()).conversation);
      }
    } catch (error) {
      console.log("Message fetching error", error);
    }
  };
  useEffect(() => {
    getConversationMessage();
  }, [conversationId]);

  const scrollToBottom = () => {
    try {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    } catch (error) {}
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: JSON.stringify({
            text: newMessage.trim(),
            conversationId: conversationId,
          }),
        }
      );
      if (res.ok) {
        setNewMessage("");
        const data = await res.json();
        setMessages([...messages, data.newMessage]);
      }
    } catch (error) {
      console.log("Send message error", error);
    }
  };

  useEffect(() => {
    decodeJWT();
  }, []);

  useEffect(() => {
    try {
      socket?.on(`${conversationId}`, (arg: any) => {
        if (arg) {
          setMessages([...messages, arg]);
        }
      });
      return () => {
        socket?.off(conversationId);
      };
    } catch (error) {
      console.log("Socket io msg trigger error", error);
    }
  });

  const handleReportBtnClick = () => {
    setIsReportModalOpen(true);
  };

  const handleReportModalClose = () => {
    setIsReportModalOpen(false);
  };

  return (
    <>
      <ConversationContainer>
        {conversationId?.length == 0 && <span> No conversation selected</span>}
        {conversationId?.length != 0 && (
          <>
            {!isLoading && (
              <ConversationProfileWrapper>
                <Image
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="Profile"
                  src={receiverInfo.image || "/images/default.jpg"}
                />
                <h3>{receiverInfo.name}</h3>
                <ConversationReport onClick={handleReportBtnClick}>
                  Report to Admin
                </ConversationReport>
              </ConversationProfileWrapper>
            )}
            <ConversationWrapper ref={chatBoxRef}>
              {isLoading && (
                <div className="flex flex-col gap-2 items-center justify-center m-auto">
                  <Spinner />
                  <span>Conversation Loading...</span>
                </div>
              )}

              {messages?.map((item: any, index: number) => {
                const { senderId, text, createdAt } = item;
                return senderId == currentUser.id ? (
                  <ConversationSendMsg key={index}>
                    <span>{formatChatTimestamp(createdAt)}</span>
                    <p>{text}</p>
                  </ConversationSendMsg>
                ) : (
                  <ConversationReceivedMsg key={index}>
                    <span>{formatChatTimestamp(createdAt)}</span>
                    <p>{text}</p>
                  </ConversationReceivedMsg>
                );
              })}
            </ConversationWrapper>
            {!isLoading && (
              <ConversationInputFieldWrapper onSubmit={sendMessage}>
                <textarea
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
            )}
          </>
        )}
      </ConversationContainer>
      {isReportModalOpen && (
        <ReportModal
          conversationId={conversationId}
          handleModalClose={handleReportModalClose}
        />
      )}
    </>
  );
};

export default ConversationSection;
