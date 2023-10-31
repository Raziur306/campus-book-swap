"use client";
import {
  ContributedListTitleText,
  PreviousContributionText,
} from "@/styled/contributionStyles";
import React from "react";
import { BookCard } from "..";
import Link from "next/link";

const ContributedList = () => {
  return (
    <div className="w-2/6 flex flex-col gap-8">
      <ContributedListTitleText>
        Your <span>Contribution</span> Helps Other to Learn
      </ContributedListTitleText>
      <div className="flex flex-col justify-center">
        <PreviousContributionText>
          Your Previous Contributions
        </PreviousContributionText>
      </div>
      <div className="grid grid-cols-2 gap-5 p-5 items-center">
        <BookCard/>
        <BookCard/>
      </div>
      <Link className="hover:underline" href={'/my-contribution'}>View All</Link>
    </div>
  );
};

export default ContributedList;
