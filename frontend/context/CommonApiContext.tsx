import { cookies } from "@/config/Cookies";
import { CommonApiContextPropsType, ContextChildrenPropsType } from "@/types";
import React, { ReactNode, createContext, useState } from "react";
import toast from "react-hot-toast";

export const CommonApiContext = createContext<CommonApiContextPropsType | any>(
  {}
);

export const CommonApiContextProvider = ({
  children,
}: ContextChildrenPropsType) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [bookList, setBookList] = useState<any>([]);
  const token = cookies.get("student_token");

  const getAllBookCall = async () => {
    try {
      const res = await fetch(`${BASE_URL}/books`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
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

  return (
    <CommonApiContext.Provider value={{ bookList, getAllBookCall }}>
      {children}
    </CommonApiContext.Provider>
  );
};
