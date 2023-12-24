import { SharedLayoutProps } from "@/types";
import Head from "next/head";
import React from "react";

export default function SharedLayout({
  title,
  description,
  children,
  TopBar,
  SideBar,
}: SharedLayoutProps) {
  return (
    <>
      <Head>
        <title>{`${title} | Campus Book Swap`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/*" href="/main-logo.jpg" />
      </Head>
      <div className="flex gap-5 bg-gray-200 items-start">
        {SideBar}
        <div className="w-full overflow-y-auto relative">
          <nav> {TopBar}</nav>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
