import { LadingPageSection } from "@/components/landing.page";
import { Leftbar, Topbar } from "@/components/shared";
import SharedLayout from "@/layout/SharedLayout";
import React from "react";

const Home = () => {
  return (
    <SharedLayout
      title="Home"
      description="Welcome to our Campus Book Swap - a platform where you can donate your books and find others to exchange with within our university community. Join us to share knowledge and expand your reading collection!"
      TopBar={<Topbar />}
      SideBar={<Leftbar />}
    >
      <LadingPageSection />
    </SharedLayout>
  );
};

export default Home;
