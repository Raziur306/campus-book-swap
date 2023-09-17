"use client";

import React, { createContext, useState } from "react";

export type NavControllerType = {
  isSidebarOpen: boolean;
  updateSideBarState: () => void;
};

export const NavControllerContext = createContext<NavControllerType>({} as NavControllerType);

export const NavControllerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const updateSideBarState = () => {
    console.log("Hello");
    setIsSideBarOpen(!isSidebarOpen);
  };

  return (
    <NavControllerContext.Provider
      value={{
        isSidebarOpen,
        updateSideBarState,
      }}
    >
      {children}
    </NavControllerContext.Provider>
  );
};
