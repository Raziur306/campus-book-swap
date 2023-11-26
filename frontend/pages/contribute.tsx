import {
  ContributedList,
  ContributionForm,
} from "@/components/contribution.page";
import { Leftbar } from "@/components/shared";
import TopBar from "@/components/shared/Topbar";
import SharedLayout from "@/layout/SharedLayout";
import { Metadata } from "next";
import React from "react";

const Contribute = () => {
  return (
    <SharedLayout title="Contribute" SideBar={<Leftbar />} TopBar={<TopBar />}>
      <div className="flex flex-row gap-10 mt-10 px-14">
        <ContributionForm />
        <ContributedList />
      </div>
    </SharedLayout>
  );
};

export default Contribute;
