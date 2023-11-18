import { ViewDetailDialogProps } from "@/types";
import React from "react";

const ViewDetailsDialog = ({ handleDialogClose }: ViewDetailDialogProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="relative p-4 w-full max-w-md max-h-full ">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            onClick={() => handleDialogClose()}
            type="button"
            className="absolute top-3 end-2.5 text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
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
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-600 w-12 h-12 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>

            <h3 className="mb-5 text-lg font-normal text-gray-600 ">
              Certain information may be concealed according to the requester&apos;s
              preferences. However, you have the option to communicate with them
              directly through the chat portal.
            </h3>
            <div>
              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-2 items-start w-full">
                  <label htmlFor="for name">Name</label>
                  <input
                    className="w-full px-3 py-2 border-2 rounded-lg"
                    placeholder="Name"
                    value={"Md Raziur Rahaman Ronju"}
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="for name">Email</label>
                  <input
                    className="w-full px-3 py-2 border-2 rounded-lg"
                    placeholder="Name"
                    value={"example@gmail.com"}
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="for name">Email</label>
                  <textarea
                    className="resize-none min-h-[150px] w-full px-3 py-2 border-2 rounded-lg"
                    placeholder="Name"
                    value={
                      "I want this because I can't afford it to buy the new book.This book is needed for my university"
                    }
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsDialog;
