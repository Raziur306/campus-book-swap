import { AboutComponent } from "@/components/about.Page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <div>
      <AboutComponent />
    </div>
  );
};

export default About;
