import { MyContributionSection } from "@/components/myContributions.page";
import { Topbar } from "@/components/shared";
import Leftbar from "@/components/shared/Leftbar";
import SharedLayout from "@/layout/SharedLayout";
import {
  PendingAndRequestPageContainer,
  PendingPageMenuWrapper,
} from "@/styled/myContributionPageStyles";
import React, { useState } from "react";

const MyContribution = () => {
  return (
    <SharedLayout
      title="Pending & Request"
      TopBar={<Topbar />}
      SideBar={<Leftbar />}
    >
      <div className="px-14">
        <PendingAndRequestPageContainer>
          <PendingPageMenuWrapper>
            <li className={"active"}> My Contribution </li>
          </PendingPageMenuWrapper>
          <MyContributionSection />
        </PendingAndRequestPageContainer>
      </div>
    </SharedLayout>
  );
};

export default MyContribution;
