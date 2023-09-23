import { Leftbar, PageLoader, Topbar } from "@/components";
import "../../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import Image from "next/image";
import { NavControllerContextProvider } from "../context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <NavControllerContextProvider>
            <PageLoader />
            <div className="flex gap-5 bg-gray-200 items-start">
              <Leftbar />
              <div className="w-full overflow-hidden">
                <Topbar />
                <div className="flex flex-col w-full h-full">{children}</div>
              </div>
            </div>
          </NavControllerContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}