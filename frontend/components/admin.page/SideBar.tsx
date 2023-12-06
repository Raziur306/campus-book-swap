import React, { useContext, useEffect, useState } from "react";
import Dashboard from "@/public/admin/dashboard";
import {
  MenuItemLogoutStyle,
  MenuItemWrapper,
  PersonInfoContainer,
} from "@/styled";
import Logout from "@/public/admin/logout";
import Box from "@/public/admin/box";
import CheckedBox from "@/public/admin/checkedBox";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AdminTopBar } from ".";
import { CommonApiContext } from "@/context/CommonApiContext";
import { cookies } from "@/config/Cookies";
import Group from "@/public/admin/group";

const SideBar = ({
  children,
  topBarTitle,
}: {
  children: React.ReactNode;
  topBarTitle: string;
}) => {
  const { profileInfo, getProfileInfoCall } = useContext(CommonApiContext);
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!profileInfo) {
      getProfileInfoCall();
    }
  }, []);

  const handleLogoutClick = () => {
    cookies.remove("user_token");
    router.refresh();
  };

  return (
    <div className="w-full h-full flex flex-row">
      <div className=" flex-col gap-5 w-[40%] xl:w-[15%]  ml-3 mr-4 hidden md:flex">
        <PersonInfoContainer>
          <Image
            width={50}
            height={50}
            className="rounded-full"
            alt="Admin Profile"
            src={profileInfo?.image || "/images/default.jpg"}
          />
          <span>{profileInfo?.name || ""}</span>
        </PersonInfoContainer>

        <Link href={"/admin"}>
          <MenuItemWrapper className={`${path == "/admin" ? "active" : ""}`}>
            <Dashboard />
            <span>Dashboard</span>
          </MenuItemWrapper>
        </Link>
        <Link href={"/admin/book-list"}>
          <MenuItemWrapper
            className={`${path?.includes("/admin/book-list") ? "active" : ""}`}
          >
            <Box />
            <span>Books</span>
          </MenuItemWrapper>
        </Link>
        <Link href={"/admin/users-list"}>
          <MenuItemWrapper
            className={`${path?.includes("/admin/users-list") ? "active" : ""}`}
          >
            <Group />
            <span>Users List</span>
          </MenuItemWrapper>
        </Link>
        <MenuItemLogoutStyle onClick={handleLogoutClick}>
          <Logout />
          <span>Log out</span>
        </MenuItemLogoutStyle>
      </div>
      <div className="w-full h-full min-h-screen bg-[#DEEAEB] p-5 xl:p-10 flex flex-col gap-10">
        <AdminTopBar title={topBarTitle} />
        {children}
      </div>
    </div>
  );
};

export default SideBar;
