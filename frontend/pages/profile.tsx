import React from "react";
import { ProfileComponent } from "@/components/profile.page";
import { Metadata } from "next";
import SharedLayout from "@/layout/SharedLayout";
import { Leftbar, Topbar } from "@/components/shared";

export const metadata: Metadata = {
  title: "Profile",
};

const Profile = () => {
  return (
    <SharedLayout TopBar={<Topbar />} SideBar={<Leftbar />} title="Profile">
      <ProfileComponent />;
    </SharedLayout>
  );
};

export default Profile;
