import {
  LargeCardContainer,
  LargeCardSubContainer,
  RecentUserWrapper,
} from "@/styled";
import Image from "next/image";
import React from "react";

const recentUsers = [
  {
    name: "Andrew Otieno",
    time: "14 min",
    img: "/admin/user.png",
  },
  {
    name: "Collins Mwangi",
    time: "2 hr",
    img: "/admin/user.png",
  },
  {
    name: "Alex Baraka",
    time: "1 day",
    img: "/admin/user.png",
  },
  {
    name: "Audrey Ouma",
    time: "2 day",
    img: "/admin/user.png",
  },
];

const RecentUserCard = () => {
  return (
    <LargeCardContainer>
      <h2>Recent Users</h2>
      {recentUsers.map(({ name, time, img }, index) => {
        const isLastItem = index === recentUsers.length - 1;
        return (
          <RecentUserWrapper key={index} $isLastItem={isLastItem}>
            <div className="flex flex-row gap-5 items-center">
              <Image
                width={36}
                height={36}
                className="rounded-full"
                alt="Recent User"
                src={img}
              />
              <h4>{name}</h4>
            </div>
            <span>{time}</span>
          </RecentUserWrapper>
        );
      })}
    </LargeCardContainer>
  );
};

export default RecentUserCard;
