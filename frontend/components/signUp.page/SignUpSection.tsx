"use client";
import { StyledSubTitleText, StyledTitleText } from "@/styled/common";
import {
  StyledSignUpInputField,
  StyledSignUpLabel,
  StyledSignUpBtn,
  StyledSignUpContainer,
} from "@/styled";

import { useRouter } from "next/navigation";
import React from "react";

const SignUpSection = () => {
  const router = useRouter();

  const handleSignInBtnClick = () => {
    router.push("/sign-in");
  };

  return (
    <>
      <StyledSignUpContainer>
        <div className=" flex flex-col bg-white rounded-lg p-10 m-auto gap-5 shadow-md">
          <div className="m-1">
            <StyledTitleText>
              Campus <span>Book</span>
            </StyledTitleText>
            <StyledSubTitleText>Swap</StyledSubTitleText>
          </div>
          <div className="flex flex-col gap-3 m-3">
            <p className="text-center text-xl">Create Your Account</p>
            <p className="text-center text-base text-gray-600">
              Welcome to Your Digital Library!
              <br />
              Join now for free access to your Digital Library!
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <StyledSignUpLabel>Full Name</StyledSignUpLabel>
            <StyledSignUpInputField
              placeholder="Enter your full name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <StyledSignUpLabel>University Email ID</StyledSignUpLabel>
            <StyledSignUpInputField
              placeholder="example@iubat.edu"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-3">
            <StyledSignUpLabel>Password</StyledSignUpLabel>
            <StyledSignUpInputField placeholder="**********" type="password" />
          </div>
          <div className="flex flex-col gap-3">
            <StyledSignUpLabel>Confirm Password</StyledSignUpLabel>
            <StyledSignUpInputField placeholder="**********" type="password" />
          </div>
          <StyledSignUpBtn>Sign Up</StyledSignUpBtn>
          <p className="mb-10">
            Already a user?{" "}
            <span
              onClick={handleSignInBtnClick}
              className="underline cursor-pointer font-bold"
            >
              Login Now
            </span>
          </p>
        </div>
      </StyledSignUpContainer>
    </>
  );
};

export default SignUpSection;
