import { StyledSubTitleText, StyledTitleText } from "@/styled/common";
import { LeftbarContainer, StyledMenuDiv } from "@/styled/leftbarStyles";
import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import Home from "../../public/svg/home.svg";
import Search from "../../public/svg/search.svg";
import Shelf from "../../public/svg/shelf.svg";
import Contribute from "../../public/svg/contribute.svg";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Chat from "../../public/svg/chat";
import { cookies } from "@/config/Cookies";
import { verifyToken } from "@/utils/tokenverifier";
import { socket } from "@/config/Socket";

const Leftbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [notification, setNotification] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<any>({});
  const token = cookies.get("user_token");
  const isInChatRoute = pathName === "/chats";

  const decodeJWT = async () => {
    const decoded = await verifyToken(token);
    setCurrentUser(decoded);
  };

  const notificationCall = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/notification`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        setNotification((await res.json())?.chat_notification);
      }
    } catch (error) {
      console.log("Fetching notification error", error);
    }
  };

  useEffect(() => {
    decodeJWT();
    notificationCall();
  }, []);

  useEffect(() => {
    try {
      if (currentUser && !isInChatRoute) {
        socket?.on(`${currentUser.id}`, (arg: any) => {
          notificationCall();
        });
      }
      return () => {
        socket?.off(currentUser.id);
      };
    } catch (error) {
      console.log("Socket.io notification trigger error", error);
    }
  });

  useEffect(() => {
    const resetNotification = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/reset-notification`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          setNotification(0);
        }
      } catch (error) {
        console.log("Fetching notification error", error);
      }
    };

    if (isInChatRoute) {
      resetNotification();
    }
  }, [isInChatRoute]);

  return (
    <LeftbarContainer className="md:hidden lg:flex lg:flex-col md:w-0 ">
      <Link href={"/"}>
        <StyledTitleText>
          Campus <span>Book</span>
        </StyledTitleText>
        <StyledSubTitleText>Swap</StyledSubTitleText>
      </Link>
      <div className={"flex flex-col gap-8 mt-20"}>
        <StyledMenuDiv
          onClick={() => router.push("/")}
          className={pathName == "/" ? "active" : ""}
        >
          <Home />
          <p>Home</p>
        </StyledMenuDiv>
        <StyledMenuDiv
          onClick={() => router.push("/chats")}
          className={isInChatRoute ? "active" : ""}
        >
          <Chat />
          <p className="chat-text">
            Chats
            {!isInChatRoute && notification > 0 && <span>{notification}</span>}
          </p>
        </StyledMenuDiv>

        <StyledMenuDiv
          onClick={() => router.push("/contribute")}
          className={pathName == "/contribute" ? "active" : ""}
        >
          <Contribute />
          <p>Contribute</p>
        </StyledMenuDiv>
        <StyledMenuDiv
          onClick={() => router.push("/my-contribution")}
          className={pathName == "/my-contribution" ? "active" : ""}
        >
          <Shelf />
          <p>My Contribution</p>
        </StyledMenuDiv>
      </div>

      <div className="flex flex-col mt-auto gap-3">
        <Link className="hover:text-gray-500" href={"/faq"}>
          FAQ
        </Link>
        <Link className="hover:text-gray-500" href={"/about"}>
          About
        </Link>
        <Link className="hover:text-gray-500" href={"/privacy-policy"}>
          Privacy Policy
        </Link>
        <span className="mt-10 text-sm text-gray-600">
          © {new Date().getFullYear()} All Rights Reserved.
        </span>
      </div>
    </LeftbarContainer>
  );
};

export default Leftbar;
