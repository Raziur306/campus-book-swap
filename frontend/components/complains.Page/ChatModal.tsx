import Spinner from "@/public/svg/spinner";
import {
  ChatBodyContainer,
  ChatModalContainer,
  ReceivedMsg,
  SendMsg,
} from "@/styled";
import {
  ComplainsChatModalContainer,
  ReporterMessage,
  ViolatedMessage,
} from "@/styled/complains.pageStyles";
import { ReportChatModalPropsType } from "@/types";
import { formatChatTimestamp } from "@/utils/formartDate";
import React, { useEffect, useRef } from "react";

const ChatModal = ({
  messages,
  handleChatModalClose,
  reporterId,
}: ReportChatModalPropsType) => {
  const chatBoxRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    try {
      chatBoxRef.current.scrollTop = chatBoxRef.current?.scrollHeight;
    } catch (error) {
      console.log("Auto scrolling error", error);
    }
  }, []);

  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="relative w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow min-h-36 overflow-hidden">
          <ChatModalContainer>
            <div className="flex flex-row items-center justify-between bg-[#f66539] p-2">
              <div className="flex flex-row gap-2 items-center p-3">
                <h3 className="text-white text-xl">Full Conversation</h3>
              </div>
              <button
                onClick={() => handleChatModalClose()}
                type="button"
                className=" border-2 bg-white ml-auto text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <ComplainsChatModalContainer ref={chatBoxRef}>
              {messages?.length > 0 && (
                <>
                  {messages?.map((item: any, index: number) => {
                    const { senderId, text, createdAt } = item;
                    return senderId != reporterId ? (
                      <ViolatedMessage key={index}>
                        <span>{formatChatTimestamp(createdAt)}</span>
                        <p>{text}</p>
                      </ViolatedMessage>
                    ) : (
                      <ReporterMessage key={index}>
                        <span>{formatChatTimestamp(createdAt)}</span>
                        <p>{text}</p>
                      </ReporterMessage>
                    );
                  })}
                </>
              )}
            </ComplainsChatModalContainer>
          </ChatModalContainer>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
