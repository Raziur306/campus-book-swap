import { LadingPageSection } from "@/components/landing.page";
import { Leftbar, ReminderModal, Topbar } from "@/components/shared";
import { CommonApiContext } from "@/context/CommonApiContext";
import SharedLayout from "@/layout/SharedLayout";
import React, { useContext, useEffect, useState } from "react";

const Home = () => {
  const { yourContributionList, getYourContributionCall } =
    useContext(CommonApiContext);
  const [showNotification, setShowNotification] = useState(false);
  const now = Date.now();

  useEffect(() => {
    const lastNotification = localStorage.getItem("lastNotification") || 0;
    if (
      (!lastNotification ||
        now - parseInt(lastNotification) > 24 * 60 * 60 * 1000) &&
      yourContributionList.length > 0
    ) {
      setShowNotification(true);
    }
  }, [yourContributionList]);

  const handleCancelClick = () => {
    localStorage.setItem("lastNotification", now.toString());
    setShowNotification(false);
  };

  useEffect(() => {
    if (yourContributionList.length == 0) {
      getYourContributionCall();
    }
  }, []);

  return (
    <>
      <SharedLayout
        title="Home"
        description="Welcome to our Campus Book Swap - a platform where you can donate your books and find others to exchange with within our university community. Join us to share knowledge and expand your reading collection!"
        TopBar={<Topbar />}
        SideBar={<Leftbar />}
      >
        <LadingPageSection />
      </SharedLayout>
      {showNotification && (
        <ReminderModal handleModalClose={handleCancelClick} />
      )}
    </>
  );
};

export default Home;
