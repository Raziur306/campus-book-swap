import {
  ContributedList,
  ContributionForm,
} from "@/components/contribution.page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Contribute to your Campus Book Swap by donating books and sharing knowledge with fellow students. Help build a vibrant reading community within your university.",
};

const Contribute = () => {
  return (
    <div className="flex flex-row gap-10 mt-10">
      <ContributionForm />
      <ContributedList />
    </div>
  );
};

export default Contribute;
