import { ContributionStyledTable } from "@/styled/pendingAndRequests.pageStyles";
import React, { useEffect, useState } from "react";
import { ChatModal, PaginationComponent } from "../shared";
import ViewBookDetailsDialog from "./ViewBookDetailsDialog";
import { userToken } from "@/config/Cookies";
import { dateFormatter } from "@/utils/dateConveter";

const YourRequest = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookDetailsDialogOpen, setIsBookDetailsDialogOpen] = useState(false);
  const [requestList, setRequestList] = useState<any>([]);
  const dataPerPage = 7;
  const offset = (currentPage - 1) * dataPerPage;
  const visibleRequest = requestList.slice(offset, offset + dataPerPage);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const getRequests = async () => {
    try {
      const res = await fetch(`${BASE_URL}/requests`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setRequestList(data.result);
      }
    } catch (error) {
      console.log("Request book fetch", error);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  const handleCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleViewClick = (index: number) => {
    setSelectedIndex(index);
    setIsBookDetailsDialogOpen(true);
  };

  const handleViewDialogClose = () => {
    setIsBookDetailsDialogOpen(false);
  };

  const handleChatClick = () => {
    setIsChatModalOpen(true);
  };

  const handleChatModalClose = () => {
    setIsChatModalOpen(false);
  };
  return (
    <>
      <div className="w-full h-full flex flex-col gap-10">
        <ContributionStyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Owner Name</th>
              <th>Book Name</th>
              <th>Request Date</th>
              <th>Price</th>
              <th>Status & Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleRequest.map((item: any, index: number) => {
              const { createdAt, status, Book } = item;
              const author = Book.author;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{author?.name}</td>
                  <td>{Book?.title}</td>
                  <td>{dateFormatter(createdAt)}</td>
                  <td>{Book?.price || 0} Tk</td>
                  <td>
                    <div className="flex flex-row gap-5 w-fit">
                      {status == "Approved" && (
                        <span onClick={handleChatClick} className="chat">
                          Chat
                        </span>
                      )}
                      {status == "Pending" && (
                        <span className={status}>{status}</span>
                      )}
                      <span
                        onClick={() => handleViewClick(index)}
                        className="view"
                      >
                        View
                      </span>
                      {status == "Rejected" && (
                        <span className="rejected">Rejected</span>
                      )}
                      {status == "Completed" && (
                        <span className={status}>{status}</span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ContributionStyledTable>
        <PaginationComponent
          visibleItemCount={visibleRequest.length}
          length={requestList.length}
          dataPerPage={dataPerPage}
          getCurrentPage={handleCurrentPage}
        />
      </div>

      {isBookDetailsDialogOpen && (
        <ViewBookDetailsDialog
          requestInfo={visibleRequest[selectedIndex]}
          handleDialogClose={handleViewDialogClose}
        />
      )}

      {isChatModalOpen && (
        <ChatModal handleChatModalClose={handleChatModalClose} />
      )}
    </>
  );
};

export default YourRequest;
