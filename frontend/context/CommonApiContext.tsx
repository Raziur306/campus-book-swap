import { cookies } from "@/config/Cookies";
import { CommonApiContextPropsType, ContextChildrenPropsType } from "@/types";
import React, { ReactNode, createContext, useState } from "react";

export const CommonApiContext = createContext<CommonApiContextPropsType | any>(
  {}
);

export const CommonApiContextProvider = ({
  children,
}: ContextChildrenPropsType) => {
  const token = cookies.get("user_token");
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [bookList, setBookList] = useState<any>([]);
  const [profileInfo, setProfileInfo] = useState<any>();
  const [yourContributionList, setYourContributionList] = useState<any>([]);

  const getAllBookCall = async () => {
    try {
      const res = await fetch(`${BASE_URL}/books`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setBookList(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProfileInfoCall = async () => {
    try {
      const res = await fetch(`${BASE_URL}/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setProfileInfo(data.result);
      }
    } catch (error) {
      console.log("Fetching profile info", error);
    }
  };

  const getYourContributionCall = async () => {
    try {
      const res = await fetch(`${BASE_URL}/contribution`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setYourContributionList(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommonApiContext.Provider
      value={{
        bookList,
        getAllBookCall,
        getProfileInfoCall,
        profileInfo,
        yourContributionList,
        getYourContributionCall,
      }}
    >
      {children}
    </CommonApiContext.Provider>
  );
};
