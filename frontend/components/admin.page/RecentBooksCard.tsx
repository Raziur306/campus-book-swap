import { cookies } from "@/config/Cookies";
import { LargeCardContainer, LargeCardSubContainer } from "@/styled";
import { formatTimeDistance } from "@/utils/formartDate";
import React, { useEffect, useState } from "react";


const RecentBooksCard = () => {
  const [recentBookList, setRecentBookList] = useState<any>([]);
  const token = cookies.get("user_token");

  useEffect(() => {
    const fetchRecentBook = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/recent-books`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.ok) {
          setRecentBookList((await res.json()).books);
        }
      } catch (error) {
        console.log("Recent book list error", error);
      }
    };

    fetchRecentBook();
  }, []);

  return (
    <LargeCardContainer>
      <h2>Recent Books</h2>
      {recentBookList?.map((item: any, index: number) => {
        const { title, createdAt } = item;
        return (
          <LargeCardSubContainer key={index}>
            <div className="flex flex-row justify-between">
              <h3 className={`${index == 0 ? "active" : ""}`}>
                New Book Donated
              </h3>
              <h4>{formatTimeDistance(createdAt)}</h4>
            </div>
            <p>
              {item.author.name} Donated <span>{title}</span>
            </p>
          </LargeCardSubContainer>
        );
      })}
    </LargeCardContainer>
  );
};

export default RecentBooksCard;
