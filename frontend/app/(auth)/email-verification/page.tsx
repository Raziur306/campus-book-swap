"use client";
import { StyledSubTitleText, StyledTitleText } from "@/styled";
import {
  StyledVerifyContainer,
  StyledVerifyLoginBtn,
} from "@/styled/emailVerificationStyles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const EamilVerification = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.replace('/sign-in');
  };




  return (
    <>
      <StyledVerifyContainer>
        <div className=" flex flex-col bg-white rounded-lg p-10 m-auto gap-5 shadow-xl">
          <div className="m-5">
            <StyledTitleText>
              Campus <span>Book</span>
            </StyledTitleText>
            <StyledSubTitleText>Swap</StyledSubTitleText>
          </div>
          <div className="flex flex-col gap-3 m-3">
            <p className="text-center text-xl">Email Verification</p>
            <p className="text-center text-base text-gray-600">
              An email has been sent to
              <br /> your registered email address for verification.
              <br />
              Please check your inbox (including spam folder)
              <br /> and click the verification link to activate your account.
            </p>
          </div>
          <Image
            className="flex m-auto"
            priority
            width={200}
            height={200}
            alt="Opend Email"
            src={"./svg/opened_email.svg"}
          />

          <StyledVerifyLoginBtn onClick={handleSignInClick}>
            Sign In
          </StyledVerifyLoginBtn>
        </div>
      </StyledVerifyContainer>
    </>
  );
};

export default EamilVerification;
