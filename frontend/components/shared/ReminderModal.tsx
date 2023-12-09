import { ActionModalContentWrapper } from "@/styled";
import Image from "next/image";
import React from "react";

const ReminderModal = ({
  handleModalClose,
}: {
  handleModalClose: () => void;
}) => {
  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-[#00000069] z-10">
      <div className="relative p-4 w-full max-w-md max-h-full ">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            onClick={() => handleModalClose()}
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

          <ActionModalContentWrapper>
            <Image
              width={100}
              height={50}
              alt="Books"
              src={"/books.jpg"}
              priority
              className="m-auto shadow-xl rounded-full p-3 mb-3"
            />
            <h3 className="mb-5 text-lg font-normal text-gray-600">
              <span className="font-bold text-red-600">Friendly Reminder</span>
              <br /> Your generosity matters! Consider updating your donated
              book stock in the Campus Book Swap System.
            </h3>
          </ActionModalContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default ReminderModal;
