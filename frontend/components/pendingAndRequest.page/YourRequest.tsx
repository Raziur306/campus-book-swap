import { ContributionStyledTable } from "@/styled/pendingAndRequests.pageStyles";
import React, { useState } from "react";
import { PaginationComponent } from "../shared";
import ViewBookDetailsDialog from "./ViewBookDetailsDialog";

const orderList = [
  {
    ownerName: "Jack Smith",
    bookName: "Programming in JAVA",
    date: "12/02/2023",
    price: 100,
    status: "Pending",
  },
  {
    ownerName: "Jack Smith",
    bookName: "Programming in JAVA",
    date: "12/02/2023",
    price: 100,
    status: "Pending",
  },
  {
    ownerName: "Jack Smith",
    bookName: "Programming in JAVA",
    date: "12/02/2023",
    price: 100,
    status: "Pending",
  },
  {
    ownerName: "Jack Smith",
    bookName: "Programming in JAVA",
    date: "12/02/2023",
    price: 100,
    status: "Pending",
  },
  {
    ownerName: "Jack Smith",
    bookName: "Programming in JAVA",
    date: "12/02/2023",
    price: 100,
    status: "Pending",
  },
  {
    ownerName: "Jack Smith",
    bookName: "Programming in JAVA",
    date: "12/02/2023",
    price: 100,
    status: "Rejected",
  },
  {
    ownerName: "Jack Smith",
    bookName: "Programming in JAVA",
    date: "12/02/2023",
    price: 100,
    status: "Completed",
  },
];

const YourRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookDetailsDialogOpen, setIsBookDetailsDialogOpen] = useState(false);
  const dataPerPage = 7;
  const offset = (currentPage - 1) * dataPerPage;
  const visibleOrders = orderList.slice(offset, offset + dataPerPage);

  const handleCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleViewClick = () => {
    setIsBookDetailsDialogOpen(true);
  };

  const handleViewDialogClose = () => {
    setIsBookDetailsDialogOpen(false);
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
            {visibleOrders.map((item: any, index: number) => {
              const { ownerName, bookName, price, status, date } = item;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ownerName}</td>
                  <td>{bookName}</td>
                  <td>{date}</td>
                  <td>{price | 0} Tk</td>
                  <td>
                    <div className="flex flex-row gap-5 w-fit">
                      {status != "Rejected" && (
                        <span className="chat">Chat</span>
                      )}
                      {status == "Pending" && (
                        <span className={status}>{status}</span>
                      )}
                      <span onClick={handleViewClick} className="view">
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
          visibleItemCount={visibleOrders.length}
          length={orderList.length}
          dataPerPage={dataPerPage}
          getCurrentPage={handleCurrentPage}
        />
      </div>

      {isBookDetailsDialogOpen && (
        <ViewBookDetailsDialog handleDialogClose={handleViewDialogClose} />
      )}
    </>
  );
};

export default YourRequest;
