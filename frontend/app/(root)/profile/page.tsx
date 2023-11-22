import React from "react";
import { ProfileComponent } from "@/components/profile.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};


const Profile = () => {
  return <ProfileComponent />;
};

export default Profile;
