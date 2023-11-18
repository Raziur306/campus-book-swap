"use client";
import { ContributionStyledTable } from "@/styled/pendingAndRequests.pageStyles";
import React, { useState } from "react";
import { PaginationComponent } from "../shared";
import { ActionDialog, ViewDetailsDialog } from ".";

const orderList = [
  {
    name: "Md Raziur Rahaman Ronju",
    bookName: "Programming in C",
    email: "example@iubat.edu",
    date: "12/02/2023",
    status: "Completed",
    desc: "I want this because I can't afford it to buy the new book. This book is needed for my university",
    actionStatus: "Pending",
  },
  {
    name: "Md Raziur Rahaman Ronju",
    email: "example@iubat.edu",
    date: "12/02/2023",
    bookName: "Programming in C",
    status: "Completed",
    desc: "I want this because I can't afford it to buy the new book. This book is needed for my university",
    actionStatus: "Pending",
  },
  {
    name: "Md Raziur Rahaman Ronju",
    email: "example@iubat.edu",
    date: "12/02/2023",
    bookName: "Programming in C",
    status: "Completed",
    desc: "I want this because I can't afford it to buy the new book. This book is needed for my university",
    actionStatus: "Pending",
  },
  {
    name: "Md Raziur Rahaman Ronju",
    email: "example@iubat.edu",
    date: "12/02/2023",
    bookName: "Programming in C",
    status: "Completed",
    desc: "I want this because I can't afford it to buy the new book. This book is needed for my university",
    actionStatus: "Pending",
  },
  {
    name: "Md Raziur Rahaman Ronju",
    email: "example@iubat.edu",
    date: "12/02/2023",
    status: "Completed",
    bookName: "Programming in C",
    desc: "I want this because I can't afford it to buy the new book. This book is needed for my university",
    actionStatus: "Pending",
  },
  {
    name: "Md Raziur Rahaman Ronju",
    email: "example@iubat.edu",
    date: "12/02/2023",
    status: "Completed",
    bookName: "Programming in C",
    desc: "I want this because I can't afford it to buy the new book. This book is needed for my university",
    actionStatus: "Pending",
  },
  {
    name: "Md Raziur Rahaman Ronju",
    email: "example@iubat.edu",
    date: "12/02/2023",
    bookName: "Programming in C",
    status: "Completed",
    desc: "I want this because I can't afford it to buy the new book. This book is needed for my university",
    actionStatus: "Pending",
  },
];

const YourContribution = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDetailsViewDialogOpen, setIsDetailsViewDialogOpen] = useState(false);
  const [isActionDialogOpen, setIsActionDialogOpen] = useState(false);
  const dataPerPage = 10;
  const offset = (currentPage - 1) * dataPerPage;
  const visibleOrders = orderList.slice(offset, offset + dataPerPage);

  const handleCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  const maxLength = 30;
  const makeTextShort = (text: string) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    }
    return text;
  };

  //view dialog state handle
  const handleViewClick = () => {
    setIsDetailsViewDialogOpen(true);
  };

  const handleViewDialogClose = () => {
    setIsDetailsViewDialogOpen(false);
  };

  //action dialog state update
  const handleActionDialogOpen = () => {
    setIsActionDialogOpen(true);
  };
  const handleActionDialogClose = () => {
    setIsActionDialogOpen(false);
  };

  const handleChatClick = () => {};

  const handleDeliveredClick = () => {};

  return (
    <>
      <div className="w-full h-full flex flex-col gap-10">
        <ContributionStyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Requester Email</th>
              <th>Requester Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status & Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleOrders.map((item: any, index: number) => {
              const {
                name,
                email,
                desc,
                date,
                status,
                actionStatus,
                bookName,
              } = item;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{bookName}</td>
                  <td>{email}</td>
                  <td>{name}</td>
                  <td>{makeTextShort(desc)}</td>
                  <td>{date}</td>
                  <td className="flex flex-row gap-4">
                    <span onClick={handleChatClick} className={status}>
                      Chat
                    </span>
                    <span onClick={handleViewClick} className={"view"}>
                      View
                    </span>
                    {actionStatus == "Pending" && (
                      <span
                        onClick={handleActionDialogOpen}
                        className={"action"}
                      >
                        Action
                      </span>
                    )}
                    {actionStatus != "Pending" && (
                      <span onClick={handleDeliveredClick} className={status}>
                        Delivered
                      </span>
                    )}
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
      {isActionDialogOpen && (
        <ActionDialog handleDialogClose={handleActionDialogClose} />
      )}
      {isDetailsViewDialogOpen && (
        <ViewDetailsDialog handleDialogClose={handleViewDialogClose} />
      )}
    </>
  );
};

export default YourContribution;
