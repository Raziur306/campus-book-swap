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
import React, { useContext, useEffect, useState } from "react";
import Calendar from "../../public/svg/calendar.svg";
import Clock from "../../public/svg/clock.svg";
import ArrowDown from "../../public/svg/arrowDown.svg";
import { NavControllerContext } from "@/app/context";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const { updateSideBarState } = useContext(NavControllerContext);
  const pathName = usePathname();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

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
          <StyledTopBarDateTimeText>{formattedTime}</StyledTopBarDateTimeText>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Calendar />
          <StyledTopBarDateTimeText>{formattedDate}</StyledTopBarDateTimeText>
        </div>
      </StyledTopBarDateWrapper>

      <Link href={"/profile"}>
        <StyledTopBarProfileWrapper
          $isProfileActive={pathName}
          className="flex flex-row gap-1 items-center"
        >
          <StyledTopBarAvatarWrapper>
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className=" max-w-[2.5rem] max-h-[2.5rem] rounded-full"
              src="/images/avatar.jpg"
              alt="Rounded avatar"
            />
          </StyledTopBarAvatarWrapper>
          <StyledTopBarProfileText>Raziur Rahaman</StyledTopBarProfileText>
          <ArrowDown className={"mr-[1rem] ml-[1rem] rotate-0 transition"} />
        </StyledTopBarProfileWrapper>
      </Link>
    </div>
  );
};

export default TopBar;
