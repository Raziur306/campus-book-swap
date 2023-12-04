import { cookies } from "@/config/Cookies";
import {
  LargeCardContainer,
  LargeCardSubContainer,
  RecentUserWrapper,
} from "@/styled";
import { formatTimeDistance } from "@/utils/formartDate";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RecentUserCard = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = cookies.get("user_token");
  const [userList, setUserList] = useState<any>([]);

  const userCall = async () => {
    try {
      const res = await fetch(`${BASE_URL}/admin/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        setUserList(await res.json());
      }
    } catch (error) {
      console.log("Fetching user error", error);
    }
  };

  useEffect(() => {
    userCall();
  }, []);

  return (
    <LargeCardContainer>
      <h2>Recent Users</h2>
      {userList.map((item: any, index: number) => {
        const isLastItem = index === userList.length - 1;
        const { name, image, createdAt } = item;
        return (
          <RecentUserWrapper key={index} $isLastItem={isLastItem}>
            <div className="flex flex-row gap-5 items-center">
              <Image
                width={36}
                height={36}
                className="rounded-full"
                alt="Recent User"
                src={image || "/images/default.jpg"}
              />
              <h4>{name}</h4>
            </div>
            <span>{formatTimeDistance(createdAt)}</span>
          </RecentUserWrapper>
        );
      })}
    </LargeCardContainer>
  );
};

export default RecentUserCard;
