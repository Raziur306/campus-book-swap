import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  AboutAuthorTextStyle,
  BookDetailsContainer,
  BookDetailsImageWrapper,
  BookMenuItemP,
  OverViewItemBox,
  RequestOwnerBtn,
} from "@/styled/bookDetailsStyles";
import CheckedBox from "@/public/admin/checkedBox";
import { useRouter } from "next/router";
import { CommonApiContext } from "@/context/CommonApiContext";
import { convertEdition } from "@/utils/editionConverter";
import { RequestOwnerModal } from ".";
import { ChatModal } from "../shared";

const BookDetails = () => {
  const [requestInfo, setRequestInfo] = useState<any>({});
  const { bookList, getAllBookCall } = useContext(CommonApiContext);
  const router = useRouter();
  const bookId = router.query.book_id;
  const selectedBook = bookList.find((item: any) => item.id == bookId);
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  useEffect(() => {
    if (selectedBook?.request.length > 0) {
      setRequestInfo(selectedBook.request[0]);
    }
  }, [selectedBook]);

  useEffect(() => {
    if (bookList.length == 0) {
      getAllBookCall();
    }
  }, []);

  const handleRequestDialogOpen = () => {
    if (requestInfo.status == "Approved") {
      setIsChatModalOpen(true);
    } else {
      setIsRequestDialogOpen(true);
    }
  };
  const handleRequestDialogClose = () => {
    setIsRequestDialogOpen(false);
  };

  const handleChatModalClose = () => {
    setIsChatModalOpen(false);
  };

  return (
    <>
      <BookDetailsContainer>
        <div className="flex flex-row gap-16 min-h-[50vh]">
          <BookDetailsImageWrapper>
            <Image fill priority alt="Book" src={selectedBook?.coverImg} />
          </BookDetailsImageWrapper>
          <div className=" flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-4xl">{selectedBook?.title}</p>
              <p className="tex-xl">
                By <span className="underline">{selectedBook?.authorName}</span>
              </p>
            </div>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-3">
                <p className="font-bold">Availability</p>
                <div className="flex flex-row gap-2 items-center">
                  <CheckedBox />
                  <p>Hard Copy</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <p className="font-bold">Status</p>
                <p className="bg-[#42BB4E] text-white p-3 rounded-md">
                  In Stock
                </p>
              </div>
            </div>
            <RequestOwnerBtn
              $isApproved={requestInfo?.status == "Approved"}
              disabled={requestInfo?.status == "Pending" ? true : false}
              onClick={handleRequestDialogOpen}
            >
              {requestInfo?.status == "Pending"
                ? "Pending"
                : requestInfo?.status == "Approved"
                ? "Chat with owner"
                : "Request Owner"}
            </RequestOwnerBtn>
          </div>

          <div className="w-4/12 bg-white rounded-md py-10 px-14 flex flex-col gap-5">
            <AboutAuthorTextStyle>
              Purpose of<span> Donation</span>
            </AboutAuthorTextStyle>
            <p className="text-justify">{selectedBook?.purpose}</p>
          </div>
        </div>

        <div className="w-full bg-white flex items-center mt-10">
          <BookMenuItemP>OverView</BookMenuItemP>
        </div>

        <div className="grid grid-cols-4 gap-5 mt-5">
          <OverViewItemBox>
            <p className="font-semibold text-gray-600">Publish Date</p>
            <p className="font-semibold">{selectedBook?.publishedYear}</p>
          </OverViewItemBox>
          <OverViewItemBox>
            <p className="font-semibold text-gray-600">Publisher</p>
            <p className="font-semibold">{selectedBook?.publisher}</p>
          </OverViewItemBox>
          <OverViewItemBox>
            <p className="font-semibold text-gray-600">Number of Request</p>
            <p className="font-semibold">0</p>
          </OverViewItemBox>
          <OverViewItemBox>
            <p className="font-semibold text-gray-600">Edition</p>
            <p className="font-semibold">
              {convertEdition(selectedBook?.bookEdition)}
            </p>
          </OverViewItemBox>
        </div>
      </BookDetailsContainer>
      {isRequestDialogOpen && (
        <RequestOwnerModal
          bookId={selectedBook?.id}
          handleCloseModal={handleRequestDialogClose}
        />
      )}
      {isChatModalOpen && (
        <ChatModal handleChatModalClose={handleChatModalClose} />
      )}
    </>
  );
};

export default BookDetails;
