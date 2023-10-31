import { MyContributionList } from "@/components/MyContribution.page";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata={
  title:"My Contribution"
}
const MyContribution = () => {
  return <div>
    <h2 className="text-center">Your Contribution List</h2>
    <MyContributionList/>
  </div>;
};

export default MyContribution;
