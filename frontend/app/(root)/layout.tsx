import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import Theme from "@/context/FontContext";
import { Topbar, Leftbar } from "@/components/shared";

export const metadata: Metadata = {
  title: {
    template: "%s | Campus Book Swap",
    default: "Campus Book Swap",
  },
  description:
    "Welcome to our Campus Book Swap - a platform where you can donate your books and find others to exchange with within our university community. Join us to share knowledge and expand your reading collection!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Theme>
            {/* <PageLoader /> */}
            <div className="flex gap-5 bg-gray-200 items-start">
              <Leftbar />
              <div className="w-full overflow-hidden">
                <Topbar />
                <div className="flex flex-col w-full h-full px-14">
                  {children}
                </div>
              </div>
            </div>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
