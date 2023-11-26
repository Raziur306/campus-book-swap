import {
  YourContribution,
  YourRequest,
} from "@/components/pendingAndRequest.page";
import { Topbar } from "@/components/shared";
import Leftbar from "@/components/shared/Leftbar";
import SharedLayout from "@/layout/SharedLayout";
import {
  PendingAndRequestPageContainer,
  PendingPageMenuWrapper,
} from "@/styled/pendingAndRequests.pageStyles";
import React, { useState } from "react";

const menuItems = [
  { label: "Your Requests", index: 0 },
  { label: "Your Contributions", index: 1 },
];

const PendingAndRequests = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuChange = (index: number) => {
    setSelectedMenu(index);
  };

  return (
    <SharedLayout
      title="Pending & Request"
      TopBar={<Topbar />}
      SideBar={<Leftbar />}
    >
      <div className="px-14">
        <PendingAndRequestPageContainer>
          <PendingPageMenuWrapper>
            {menuItems.map((item) => (
              <li
                key={item.index}
                onClick={() => handleMenuChange(item.index)}
                className={selectedMenu === item.index ? "active" : ""}
              >
                {item.label}
              </li>
            ))}
          </PendingPageMenuWrapper>
          {selectedMenu == 0 && <YourRequest />}
          {selectedMenu == 1 && <YourContribution />}
        </PendingAndRequestPageContainer>
      </div>
    </SharedLayout>
  );
};

export default PendingAndRequests;
