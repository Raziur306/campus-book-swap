import { ContextChildrenPropsType } from "@/types";
import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext<any>({});

export const SocketContextProvider = ({
  children,
}: ContextChildrenPropsType) => {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    setSocket(io(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}`));
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
