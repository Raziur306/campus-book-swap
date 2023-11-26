import { StyledSubTitleText, StyledTitleText } from "@/styled/common";
import { LeftbarContainer, StyledMenuDiv } from "@/styled/leftbarStyles";
import Image from "next/image";
import React, { useState, useContext } from "react";
import Home from "../../public/svg/home.svg";
import Search from "../../public/svg/search.svg";
import Shelf from "../../public/svg/shelf.svg";
import Contribute from "../../public/svg/contribute.svg";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

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
    name: "Contribute",
    route: "/contribute",
    icon: Contribute,
  },
  {
    name: "Pending & Requests",
    route: "/pending-and-requests",
    icon: Shelf,
  },
];

const Leftbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <LeftbarContainer className="md:hidden lg:flex lg:flex-col md:w-0 ">
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

      <div className="flex flex-col mt-auto mb-10 gap-3">
        <Link className="hover:text-gray-500" href={"/about"}>
          About{" "}
        </Link>
        <Link className="hover:text-gray-500" href={"/support"}>
          Support
        </Link>
        <Link className="hover:text-gray-500" href={"/terms&condition"}>
          Terms & Condition
        </Link>
      </div>
    </LeftbarContainer>
  );
};

export default Leftbar;
