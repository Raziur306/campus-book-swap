import { ContributionStyledTable } from "@/styled/myContributionPageStyles";
import React, { useContext, useEffect, useState } from "react";
import { PaginationComponent } from "../shared";
import { CommonApiContext } from "@/context/CommonApiContext";
import Image from "next/image";
import { dateFormatter } from "@/utils/dateConveter";
import { useRouter } from "next/router";
import { cookies } from "@/config/Cookies";

const YourContribution = () => {
  const { yourContributionList, getYourContributionCall } =
    useContext(CommonApiContext);
  const [currentPage, setCurrentPage] = useState(1);
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

  const handleCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleViewClick = (id: string) => {
    router.push(`/view-your-book/${id}`);
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleContribution.map((item: any, index: number) => {
              const { id, title, coverImg, price, purpose, createdAt } = item;
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
                    <span
                      onClick={() => handleViewClick(id)}
                      className={"view"}
                    >
                      View
                    </span>
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
    </>
  );
};

export default YourContribution;
