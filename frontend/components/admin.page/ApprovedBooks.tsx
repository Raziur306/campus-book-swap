import React, { useEffect, useState } from "react";
import { PaginationComponent } from "../shared";
import { dateFormatter } from "@/utils/formartDate";
import { cookies } from "@/config/Cookies";
import { BooksInDetailsTable } from "@/styled";
import Image from "next/image";
import { DeleteBookModal } from ".";

const ApprovedBooks = () => {
  const token = cookies.get("user_token");
  const [bookList, setBookList] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string>("");
  const dataPerPage = 5;
  const offset = (currentPage - 1) * dataPerPage;
  const visibleContribution = bookList.slice(offset, offset + dataPerPage);

  const fetchBooks = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/approved-books`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        setBookList((await res.json()).books);
      }
    } catch (error) {
      console.log("Admin Fetching all books error", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (!isDeleteModalOpen) {
      fetchBooks();
    }
  }, [isDeleteModalOpen]);

  const handleCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleDeleteClick = (id: string) => {
    setSelectedBookId(id);
    setIsDeleteModalOpen(true);
  };

  const handleModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col gap-10">
        <BooksInDetailsTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Cover Page</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Purpose</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action & Status</th>
            </tr>
          </thead>
          <tbody>
            {visibleContribution.map((item: any, index: number) => {
              const {
                id,
                title,
                coverImg,
                price,
                purpose,
                createdAt,
                authorName,
              } = item;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Image
                      width={70}
                      height={70}
                      alt={"title"}
                      src={`${coverImg}`}
                      sizes={"(max-width:768px) 50vh, 100vh"}
                    />
                  </td>
                  <td>{title}</td>
                  <td>{authorName}</td>
                  <td className="w-60">{purpose}</td>
                  <td>{price}Tk</td>
                  <td>{dateFormatter(createdAt)}</td>
                  <td>
                    <span
                      onClick={() => handleDeleteClick(id)}
                      className={"delete"}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </BooksInDetailsTable>
        <PaginationComponent
          visibleItemCount={visibleContribution.length}
          length={bookList.length}
          dataPerPage={dataPerPage}
          getCurrentPage={handleCurrentPage}
        />
      </div>
      {isDeleteModalOpen && (
        <DeleteBookModal
          bookId={selectedBookId}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default ApprovedBooks;
