"use client";
import { YourContribution, YourRequest } from "@/components/pendingAndRequest.page";
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
  );
};

export default PendingAndRequests;
