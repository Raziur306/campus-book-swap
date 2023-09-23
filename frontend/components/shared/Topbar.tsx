"use client";
import {
  StyledTopBarAvatarWrapper,
  StyledTopBarDateTimeText,
  StyledTopBarDateWrapper,
  StyledTopBarProfileText,
  StyledTopBarProfileWrapper,
  StyledTopBarSearch,
} from "@/styled/topbarStyles";
import Image from "next/image";
import React, { useState, useContext } from "react";
import Calendar from "../../public/svg/calendar.svg";
import Clock from "../../public/svg/clock.svg";
import ArrowDown from "../../public/svg/arrowDown.svg";
import { NavControllerContext } from "@/app/context";

const TopBar = () => {
  const { updateSideBarState } = useContext(NavControllerContext);

  return (
    <div className="flex flex-row justify-between mt-5  items-center p-5 sticky top-0 backdrop-blur-sm z-10">
      <Image
        onClick={() => updateSideBarState()}
        className="cursor-pointer lg:hidden"
        priority
        width={40}
        height={40}
        alt="hamburger"
        src={"/svg/hamburger.svg"}
      />
      <div>
        <StyledTopBarSearch placeholder="Search.." type="text" />
      </div>
      <StyledTopBarDateWrapper className="flex flex-row gap-10">
        <div className="flex flex-row gap-2 items-center">
          <Clock />
          <StyledTopBarDateTimeText>09:00 hrs</StyledTopBarDateTimeText>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Calendar />
          <StyledTopBarDateTimeText>4-Mar-2023</StyledTopBarDateTimeText>
        </div>
      </StyledTopBarDateWrapper>

      <StyledTopBarProfileWrapper className="flex flex-row gap-1 items-center">
        <StyledTopBarAvatarWrapper>
          <Image
            fill
            priority
            className=" max-w-[2.5rem] max-h-[2.5rem] rounded-full"
            src="/images/avatar.jpg"
            alt="Rounded avatar"
          />
        </StyledTopBarAvatarWrapper>
        <StyledTopBarProfileText>Raziur Rahaman</StyledTopBarProfileText>
        <ArrowDown className={"mr-[1rem] ml-[1rem] rotate-0 transition"} />
      </StyledTopBarProfileWrapper>
    </div>
  );
};

export default TopBar;