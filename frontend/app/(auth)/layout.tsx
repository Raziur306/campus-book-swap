
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import Theme from "@/context/FontContext";
import { UserContextProvider } from "@/context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Campus Book Swap",
    default: "Campus Book Swap",
  },
  description:
    "Welcome to our Campus Book Swap - a platform where you can donate your books and find others to exchange with within our university community. Join us to share knowledge and expand your reading collection!",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <PageLoader /> */}
        <StyledComponentsRegistry>
          <Theme>
            <UserContextProvider>{children}</UserContextProvider>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
