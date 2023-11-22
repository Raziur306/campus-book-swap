import React from "react";
import MyContributionCard from "./MyContributionCard";

const MyContributionList = () => {
  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <MyContributionCard />
      <MyContributionCard />
      <MyContributionCard />
    </div>
  );
};

export default MyContributionList;
