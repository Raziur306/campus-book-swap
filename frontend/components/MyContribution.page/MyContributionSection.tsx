import { ContributionStyledTable } from "@/styled/myContributionPageStyles";
import React, { useContext, useEffect, useState } from "react";
import { PaginationComponent } from "../shared";
import { CommonApiContext } from "@/context/CommonApiContext";
import Image from "next/image";
import { dateFormatter } from "@/utils/formartDate";
import { useRouter } from "next/router";
import { cookies } from "@/config/Cookies";
import { ActionDialog } from ".";
import ViewBookDetailsDialog from "./ViewBookDetailsDialog";

const MyContributionSection = () => {
  const { yourContributionList, getYourContributionCall } =
    useContext(CommonApiContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isBookInfoModalOpen, setIsBookInfoModalOpen] =
    useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBookIndex, setSelectedBookIndex] = useState<number>(0);
  const dataPerPage = 10;
  const offset = (currentPage - 1) * dataPerPage;
  const visibleContribution = yourContributionList.slice(
    offset,
    offset + dataPerPage
  );
  const router = useRouter();

  useEffect(() => {
    getYourContributionCall();
  }, []);

  useEffect(() => {
    if (!isDeleteModalOpen) {
      getYourContributionCall();
    }
  }, [isDeleteModalOpen]);

  const handleCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleViewClick = (index: number) => {
    setSelectedBookIndex(index);
    setIsBookInfoModalOpen(true);
  };

  const handleDeleteClick = (index: number) => {
    setSelectedBookIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleBookInfoModalClose = () => {
    setIsBookInfoModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col gap-10">
        <ContributionStyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Cover Page</th>
              <th>Book Title</th>
              <th>Purpose</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleContribution.map((item: any, index: number) => {
              const { id, title, coverImg, price, purpose, createdAt, status } =
                item;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Image
                      width={70}
                      height={70}
                      alt={"title"}
                      src={`${coverImg}`}
                    />
                  </td>
                  <td>{title}</td>
                  <td className="w-60">{purpose}</td>
                  <td>{price}Tk</td>
                  <td>{dateFormatter(createdAt)}</td>
                  <td>
                    <span className={`${status}`}>{status}</span>
                  </td>
                  <td>
                    <div className="flex flex-row gap-2">
                      <span
                        onClick={() => handleViewClick(index)}
                        className={"view"}
                      >
                        View
                      </span>
                      <span
                        onClick={() => handleDeleteClick(index)}
                        className={"delete"}
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ContributionStyledTable>
        <PaginationComponent
          visibleItemCount={visibleContribution.length}
          length={yourContributionList.length}
          dataPerPage={dataPerPage}
          getCurrentPage={handleCurrentPage}
        />
      </div>
      {isDeleteModalOpen && (
        <ActionDialog
          bookId={visibleContribution[selectedBookIndex].id}
          handleModalClose={handleModalClose}
        />
      )}
      {isBookInfoModalOpen && (
        <ViewBookDetailsDialog
          bookInfo={visibleContribution[selectedBookIndex]}
          handleBookInfoModalClose={handleBookInfoModalClose}
        />
      )}
    </>
  );
};

export default MyContributionSection;
