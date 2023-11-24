import { LadingPageSection } from "@/components/landing.page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return <LadingPageSection />;
};

export default Home;
