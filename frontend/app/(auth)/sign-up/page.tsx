"use client";
import {
  StyledInputField,
  StyledLabel,
  StyledSignUpBtn,
  StyledSignUpContainer,
  StyledSignUpSubTitle,
  StyledSignUpTitleText,
} from "@/styled/signUpStyles";

import { useRouter } from "next/navigation";
import React from "react";

const SignUp = () => {
  const router = useRouter();

  const handleSignInBtnClick = () => {
    router.push("/sign-in");
  };

  return (
    <>
    
      <StyledSignUpContainer>
        <div className=" flex flex-col bg-white rounded-lg p-10 m-auto gap-5 shadow-md">
          <div className="m-1">
            <StyledSignUpTitleText>
              Campus <span>Book</span>
            </StyledSignUpTitleText>
            <StyledSignUpSubTitle>Swap</StyledSignUpSubTitle>
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
            <StyledLabel>Full Name</StyledLabel>
            <StyledInputField placeholder="Enter your full name" type="text" />
          </div>
          <div className="flex flex-col gap-3">
            <StyledLabel>University Email ID</StyledLabel>
            <StyledInputField placeholder="example@iubat.edu" type="email" />
          </div>
          <div className="flex flex-col gap-3">
            <StyledLabel>Password</StyledLabel>
            <StyledInputField placeholder="**********" type="password" />
          </div>
          <div className="flex flex-col gap-3">
            <StyledLabel>Confirm Password</StyledLabel>
            <StyledInputField placeholder="**********" type="password" />
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

export default SignUp;
