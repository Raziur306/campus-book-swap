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
import Flag from "@/public/admin/flag";

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
    getProfileInfoCall();
  }, []);

  const handleLogoutClick = () => {
    cookies.remove("user_token");
    router.push("/sign-in");
  };

  return (
    <div className="w-full h-full flex flex-row">
      <div className="bg-white  w-[20%] min-w-[250px]">
        <div className=" flex-col w-[40%] xl:w-[15%] gap-5 ml-3 mr-4 hidden md:flex fixed">
          <PersonInfoContainer>
            <Image
              width={50}
              height={50}
              className="rounded-full"
              alt="Admin Profile"
              src={profileInfo.result?.image || "/images/default.jpg"}
            />
            <span>{profileInfo.result?.name || ""}</span>
          </PersonInfoContainer>

          <Link href={"/admin"}>
            <MenuItemWrapper className={`${path == "/admin" ? "active" : ""}`}>
              <Dashboard />
              <span>Dashboard</span>
            </MenuItemWrapper>
          </Link>
          <Link href={"/admin/book-list"}>
            <MenuItemWrapper
              className={`${
                path?.includes("/admin/book-list") ? "active" : ""
              }`}
            >
              <Box />
              <span>Books</span>
            </MenuItemWrapper>
          </Link>
          <Link href={"/admin/users-list"}>
            <MenuItemWrapper
              className={`${
                path?.includes("/admin/users-list") ? "active" : ""
              }`}
            >
              <Group />
              <span>Users List</span>
            </MenuItemWrapper>
          </Link>
          <Link href={"/admin/complains"}>
            <MenuItemWrapper
              className={`${
                path?.includes("/admin/complains") ? "active" : ""
              }`}
            >
              <Flag />
              <span>Complains</span>
            </MenuItemWrapper>
          </Link>
          <MenuItemLogoutStyle onClick={handleLogoutClick}>
            <Logout />
            <span>Log out</span>
          </MenuItemLogoutStyle>
        </div>
      </div>
      <div className="w-full h-full min-h-screen bg-[#DEEAEB] p-5 xl:p-10 flex flex-col gap-10">
        <AdminTopBar title={topBarTitle} />
        {children}
      </div>
    </div>
  );
};

export default SideBar;
