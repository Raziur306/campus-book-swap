"use client";
import { UserContextPropsType, ContextChildrenPropsType } from "@/types";
import { CookiesExpires } from "@/utils/Task";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import Cookies from "universal-cookie";

export const UserContext = createContext<UserContextPropsType | any>({});

export const UserContextProvider = ({ children }: ContextChildrenPropsType) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const cookies = new Cookies(null, { path: "/" });
  const [isLoading, setIsLoading] = useState(false);

  const registerUserCall = async (value: Object) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        router.push("/email-verification");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const loginCall = async (value: Object) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        cookies.set("user_token", data.token, { expires: CookiesExpires });
        router.push("/");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ isLoading, registerUserCall, loginCall }}>
      {children}
    </UserContext.Provider>
  );
};
