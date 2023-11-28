import {
  StyledFloatingMenuContainer,
  StyledFloatingMenuItem,
  StyledTopBarAvatarWrapper,
  StyledTopBarDateTimeText,
  StyledTopBarDateWrapper,
  StyledTopBarProfileText,
  StyledTopBarProfileWrapper,
  StyledTopBarSearch,
} from "@/styled/topbarStyles";
import Image from "next/image";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Calendar from "../../public/svg/calendar.svg";
import Clock from "../../public/svg/clock.svg";
import ArrowDown from "../../public/svg/arrowDown.svg";
import Link from "next/link";
import Settings from "@/public/svg/settings";
import Logout from "@/public/svg/logout";
import { cookies } from "@/config/Cookies";
import { useRouter } from "next/navigation";
import { CommonApiContext } from "@/context/CommonApiContext";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const router = useRouter();
  const { getProfileInfoCall, profileInfo } = useContext(CommonApiContext);

  useEffect(() => {
    getProfileInfoCall();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setFormattedTime(
        currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setFormattedDate(
        currentTime.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    },
    [isOpen, toggleMenu]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const handleLogoutClick = () => {
    cookies.remove("user_token");
    router.refresh();
  };

  return (
    <div className="flex flex-row justify-between mt-5  items-center p-5 sticky top-0 backdrop-blur-sm z-10">
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

      <StyledTopBarProfileWrapper
        ref={modalRef}
        onClick={toggleMenu}
        $isFloatingMenuOpen={isOpen}
        className="flex flex-row gap-1 items-center"
      >
        <StyledTopBarAvatarWrapper>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className=" max-w-[2.5rem] max-h-[2.5rem] rounded-full"
            src={profileInfo?.image || "/images/default.jpg"}
            alt="Rounded avatar"
          />
        </StyledTopBarAvatarWrapper>
        <StyledTopBarProfileText>{profileInfo?.name}</StyledTopBarProfileText>
        <ArrowDown className={"mr-[1rem] ml-[1rem] rotate-0 transition"} />
        <StyledFloatingMenuContainer $isFloatingMenuOpen={isOpen}>
          <Link href="/profile">
            <StyledFloatingMenuItem>
              <Settings />
              <span>Settings</span>
            </StyledFloatingMenuItem>
          </Link>
          <StyledFloatingMenuItem onClick={handleLogoutClick}>
            <Logout />
            <span>Logout</span>
          </StyledFloatingMenuItem>
        </StyledFloatingMenuContainer>
      </StyledTopBarProfileWrapper>
    </div>
  );
};

export default TopBar;
