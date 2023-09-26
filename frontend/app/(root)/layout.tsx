import { Leftbar, PageLoader, Topbar } from "@/components";
import "../../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import Image from "next/image";
import { NavControllerContextProvider } from "../context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Campus Book Swap',
    default: "Campus Book Swap",
  },
  description: "Welcome to our Campus Book Swap - a platform where you can donate your books and find others to exchange with within our university community. Join us to share knowledge and expand your reading collection!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default RootLayout;
