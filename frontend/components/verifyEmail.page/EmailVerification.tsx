"use client";
import React, { useReducer } from "react";
import {
  StyledSubTitleText,
  StyledTitleText,
  StyledVerifyContainer,
} from "@/styled";
import VerifiedEmail from "@/public/svg/verifiedEmail";
import { useParams } from "next/navigation";

const EmailVerification = () => {
  const { userId } = useParams();

  return (
    <StyledVerifyContainer>
      <div className=" flex flex-col bg-white rounded-lg p-10 m-auto gap-5 shadow-xl">
        <div className="m-5">
          <StyledTitleText>
            Campus <span>Book</span>
          </StyledTitleText>
          <StyledSubTitleText>Swap</StyledSubTitleText>
        </div>
        <div className="flex flex-col gap-3 m-3">
          <p className="text-center text-xl">Email Verification Successful</p>
          <p className="text-center text-base text-gray-600">
            Thank you for successfully verifying your email! You are now ready
            <br />
            to embark on the next phase of your journey within the system.
            <br />
            Let&apos;s continue this exciting adventure together!
          </p>
        </div>
        <VerifiedEmail />
      </div>
    </StyledVerifyContainer>
  );
};

export default EmailVerification;
