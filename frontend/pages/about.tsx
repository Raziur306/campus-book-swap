import { AboutComponent } from "@/components/about.Page";
import SharedLayout from "@/layout/SharedLayout";
import { Metadata } from "next";
import React from "react";

const About = () => {
  return (
    <SharedLayout title="About">
      <AboutComponent />
    </SharedLayout>
  );
};

export default About;
