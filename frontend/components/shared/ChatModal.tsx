import {
  ChatModalContainer,
  ChatBodyContainer,
  SendMsg,
  ReceivedMsg,
  ChatModalInputWrapper,
} from "@/styled/common";
import { ChatModalPropsType } from "@/types";
import Image from "next/image";
import React from "react";
const ChatModal = ({ handleChatModalClose }: ChatModalPropsType) => {
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
                  src={"/images/default.jpg"}
                  alt={"Chat Profile"}
                />
                <h3>Raziur Rahaman Ronju</h3>
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
            <ChatBodyContainer>
              <SendMsg>
                <p>Hi how are you?</p>
              </SendMsg>
              <ReceivedMsg>
                <p>Hello</p>
              </ReceivedMsg>
              <SendMsg>
                <p>Hi how are you?</p>
              </SendMsg>
              <ReceivedMsg>
                <p>Hello</p>
              </ReceivedMsg>
              <SendMsg>
                <p>Hi how are you?</p>
              </SendMsg>
              <ReceivedMsg>
                <p>Hello</p>
              </ReceivedMsg>
              <SendMsg>
                <p>Hi how are you?</p>
              </SendMsg>
              <ReceivedMsg>
                <p>Hello</p>
              </ReceivedMsg>
              <SendMsg>
                <p>Hi how are you?</p>
              </SendMsg>
              <ReceivedMsg>
                <p>Hello</p>
              </ReceivedMsg>
            </ChatBodyContainer>
            <ChatModalInputWrapper>
              <input type="text" placeholder="Type your message..." />
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
            </ChatModalInputWrapper>
          </ChatModalContainer>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
