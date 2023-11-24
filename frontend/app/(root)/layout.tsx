import "@/styles/globals.css";
import { Topbar, Leftbar } from "@/components/shared";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex gap-5 bg-gray-200 items-start">
          <Leftbar />
          <div className="w-full overflow-hidden">
            <Topbar />
            <div className="flex flex-col w-full h-full px-14">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
