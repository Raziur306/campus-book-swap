import { CommonApiContextProvider } from "@/context/CommonApiContext";
import Theme from "@/context/FontContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { PageLoader } from "@/components/shared";
import { SocketContextProvider } from "@/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <CommonApiContextProvider>
        <Toaster
          toastOptions={{
            style: {
              fontFamily: "arial",
            },
          }}
        />
        <PageLoader />
        <SocketContextProvider>
          <CommonApiContextProvider>
            <Component {...pageProps} />
          </CommonApiContextProvider>
        </SocketContextProvider>
      </CommonApiContextProvider>
    </Theme>
  );
}

export default MyApp;
