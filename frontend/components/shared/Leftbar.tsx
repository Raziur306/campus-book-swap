"use client";

import { StyledSubTitleText, StyledTitleText } from "@/styled/common";
import { LeftbarContainer, StyledMenuDiv } from "@/styled/leftbarStyles";
import Image from "next/image";
import React, { useState, useContext } from "react";
import Home from "../../public/svg/home.svg";
import Search from "../../public/svg/search.svg";
import Shelf from "../../public/svg/shelf.svg";
import Contribute from "../../public/svg/contribute.svg";
import { useRouter, usePathname } from "next/navigation";
import { NavControllerContext } from "@/app/context";

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
  const { isSidebarOpen, updateSideBarState } =
    useContext(NavControllerContext);

  const router = useRouter();
  const pathName = usePathname();

  return (
    <LeftbarContainer
      className={`md:hidden lg:flex lg:flex-col md:w-0 ${
        isSidebarOpen ? "display-nav" : ""
      }`}
    >
      <Image
        className="cursor-pointer absolute right-1 lg:hidden"
        onClick={() => updateSideBarState()}
        width={40}
        height={40}
        src={"/svg/cancel.svg"}
        alt="Close Leftbar"
      />
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
