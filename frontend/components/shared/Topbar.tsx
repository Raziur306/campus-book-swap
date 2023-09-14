"use client";
import {
  StyledTopbarAvatarWrapper,
  StyledTopbarDateTimetext,
  StyledTopbarDateWrapper,
  StyledTopbarProfileText,
  StyledTopbarProfileWrapper,
  StyledTopbarSeach,
} from "@/styled/topbarStyles";
import Image from "next/image";
import React from "react";
import Calendar from "../../public/svg/calendar.svg";
import Clock from "../../public/svg/clock.svg";
import ArrowDown from "../../public/svg/arrowDown.svg";

const Topbar = () => {


  return (
    <div className="flex flex-row justify-between mt-5  items-center">
      <div>
        <StyledTopbarSeach placeholder="Search.." type="text" />
      </div>
      <StyledTopbarDateWrapper className="flex flex-row gap-10">
        <div className="flex flex-row gap-2 items-center">
          <Clock />
          <StyledTopbarDateTimetext>09:00 hrs</StyledTopbarDateTimetext>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Calendar />
          <StyledTopbarDateTimetext>4-Mar-2023</StyledTopbarDateTimetext>
        </div>
      </StyledTopbarDateWrapper>

      <StyledTopbarProfileWrapper className="flex flex-row gap-1 items-center">
        <StyledTopbarAvatarWrapper>
          <Image
            fill
            priority
            className=" max-w-[2.5rem] max-h-[2.5rem] rounded-full"
            src="/images/avatar.jpg"
            alt="Rounded avatar"
          />
        </StyledTopbarAvatarWrapper>
        <StyledTopbarProfileText>Raziur Rahaman</StyledTopbarProfileText>
        <ArrowDown className={"mr-[1rem] ml-[1rem] rotate-0 transition"}/>
      </StyledTopbarProfileWrapper>
    </div>
  );
};

export default Topbar;
