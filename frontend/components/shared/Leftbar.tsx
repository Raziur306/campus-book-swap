"use client";

import { StyledSubTitleText, StyledTitleText } from "@/styled/common";
import { LeftbarContainer, StyledMenuDiv } from "@/styled/leftbarStyles";
import Image from "next/image";
import React from "react";
import Home from "../../public/svg/home.svg";
import Search from "../../public/svg/search.svg";
import Shelf from "../../public/svg/shelf.svg";
import Contribute from "../../public/svg/contribute.svg";
import { useRouter, usePathname } from "next/navigation";

export const LeftBarItems = [
  {
    name: "Home",
    route: "/",
    icon: Home,
  },
  {
    name: "Search",
    route: "/search",
    icon: Search,
  },
  {
    name: "My Shelf",
    route: "/my-shelf",
    icon: Shelf,
  },
  {
    name: "Contribute",
    route: "/contribute",
    icon: Contribute,
  },
];

const Leftbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <LeftbarContainer>
      <StyledTitleText>
        Campus <span>Book</span>
      </StyledTitleText>
      <StyledSubTitleText>Swap</StyledSubTitleText>
      <div className={"flex flex-col gap-8 mt-20"}>
        {LeftBarItems.map((item, index) => {
          return (
            <StyledMenuDiv
              onClick={() => router.push(item.route)}
              className={pathName == item.route ? "active" : ""}
              key={index}
            >
              <item.icon />
              <p>{item.name}</p>
            </StyledMenuDiv>
          );
        })}
      </div>
    </LeftbarContainer>
  );
};

export default Leftbar;
