"use client";
import React, { useEffect, useState } from "react";
import ArrowRight from "@/public/admin/arrowRight";
import ArrowLeft from "@/public/admin/arrowLeft";
import { PaginationProps } from "@/types";
import { PaginationWrapper } from "@/styled";

const PaginationComponent = ({
  dataPerPage,
  length,
  getCurrentPage,
  visibleItemCount,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(length / dataPerPage);

  const handleCurrentPageSelection = (index: number) => {
    getCurrentPage(index);
    setCurrentPage(index);
  };

  useEffect(() => {
    getCurrentPage(currentPage);
  }, [currentPage, getCurrentPage]);

  const createPageBtn = (page: number) => (
    <button
      key={page}
      onClick={() => handleCurrentPageSelection(page)}
      className={currentPage === page ? "active" : ""}
    >
      {page}
    </button>
  );

  const generatePageButtons = () => {
    const pageButtons: any[] = [];
    for (let i = 1; i <= totalPages; i++) {
      const isWithinRange =
        i <= 4 ||
        i > totalPages - 2 ||
        (i >= currentPage - 1 && i <= currentPage + 1);

      const isDotsNeeded =
        (i === currentPage - 2 || i === currentPage + 2) &&
        i > 5 &&
        i < totalPages - 2;

      if (isWithinRange) {
        pageButtons.push(createPageBtn(i));
      } else if (isDotsNeeded) {
        pageButtons.push(<span key={`dots-${i}`}>...</span>);
      }
    }
    return pageButtons;
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePrevClick = () => handlePageChange(currentPage - 1);
  const handleNextClick = () => handlePageChange(currentPage + 1);

  return (
    <PaginationWrapper>
      <h5 className="order-last md:order-first">
        Showing {visibleItemCount} out of {length} entries
      </h5>
      <div className="flex flex-row gap-1 xl:gap-5">
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          <ArrowLeft />
        </button>
        {generatePageButtons()}
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
          <ArrowRight />
        </button>
      </div>
    </PaginationWrapper>
  );
};

export default PaginationComponent;
