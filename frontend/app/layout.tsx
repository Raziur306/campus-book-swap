import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import Theme from "@/context/FontContext";
import { PageLoader } from "@/components/shared";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Theme>
            <PageLoader />
            <Toaster
              toastOptions={{
                style: {
                  fontFamily: "Arial",
                },
              }}
            />
            {children}
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
