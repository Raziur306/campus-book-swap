"use client";
import {
  StyledForgetPassText,
  StyledInputField,
  StyledLabel,
  StyledSignInBtn,
  StyledSignInContainer,
  StyledSignInSubTitle,
  StyledSignInTitleText,
} from "@/styled/signInStyles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SignIn = () => {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push('/sign-up');
  };

  return (
    <>
      <StyledSignInContainer>
        <div className=" flex flex-col bg-white rounded-lg p-10 m-auto gap-5 shadow-md">
          <div className="m-5">
            <StyledSignInTitleText>
              Campus <span>Book</span>
            </StyledSignInTitleText>
            <StyledSignInSubTitle>Swap</StyledSignInSubTitle>
          </div>
          <div className="flex flex-col gap-3 m-3">
            <p className="text-center text-xl">Welcome Back !</p>
            <p className="text-center text-base text-gray-600">
              Sign in to continue to your Digital Library
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <StyledLabel>Email</StyledLabel>
            <StyledInputField placeholder="example@iubat.edu" type="email" />
          </div>
          <div className="flex flex-col gap-3">
            <StyledLabel>Password</StyledLabel>
            <StyledInputField placeholder="**********" type="password" />
          </div>
          <div className="flex flex-row gap-3 justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <StyledForgetPassText>Forgot password?</StyledForgetPassText>
          </div>
          <StyledSignInBtn>Sign In</StyledSignInBtn>
          <p className="mb-10">
            New User?{" "}
            <span
              onClick={handleSignUpClick}
              className="underline cursor-pointer font-bold"
            >
              Register Here
            </span>
          </p>
        </div>
      </StyledSignInContainer>
    </>
  );
};

export default SignIn;
