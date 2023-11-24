"use client";
import React from "react";
import Success from "@/public/success";
import { ContributionSuccessContainer } from "@/styled/contributionStyles";
const SubmissionSuccess = () => {
  return (
    <ContributionSuccessContainer>
      <div className="flex flex-col justify-center items-center gap-20 m-auto">
        <h2 className="text-3xl">Thank you For your Submission</h2>
        <Success />
        <p>Your Contribution will be live when it approved by admin.</p>
      </div>
    </ContributionSuccessContainer>
  );
};

export default SubmissionSuccess;
