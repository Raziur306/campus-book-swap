"use client";
import { StyledSubTitleText, StyledTitleText } from "@/styled/common";
import {
  StyledSignUpInputField,
  StyledSignUpLabel,
  StyledSignUpBtn,
  StyledSignUpContainer,
} from "@/styled";

import { useRouter } from "next/navigation";
import React, { ReactNode, useContext } from "react";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { UserContext } from "@/context";

const SignUpSection = () => {
  const { registerUserCall } = useContext(UserContext);

  const router = useRouter();

  const handleSignInBtnClick = () => {
    router.push("/sign-in");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: object({
      name: string()
        .required()
        .min(3)
        .trim()
        .matches(/^[a-zA-Z\s]+$/, "Name must not contain special characters"),
      email: string()
        .email()
        .trim()
        .required()
        .test(
          "is-edu-email",
          "Email must be from an education domain",
          (value: any) => {
            if (!value) {
              return false;
            }
            const emailDomain = value.split("@")[1];
            return emailDomain && emailDomain.toLowerCase().endsWith("edu");
          }
        ),
      password: string().required(),
      confirmPassword: string()
        .required()
        .oneOf([ref("password")], "Passwords must match"),
    }),
    onSubmit: (values: any) => {
       registerUserCall(values);
    },
  });

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
              name="name"
              onChange={formik.handleChange}
              $error={
                formik.errors.name != undefined && formik.touched.name == true
              }
            />
            {formik.errors.name != undefined && formik.touched.name == true && (
              <div className="text-red-600">
                {(formik.errors.name || "") as ReactNode}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <StyledSignUpLabel>University Email ID</StyledSignUpLabel>
            <StyledSignUpInputField
              placeholder="example@iubat.edu"
              type="email"
              onChange={formik.handleChange}
              name="email"
              $error={
                formik.errors.email != undefined && formik.touched.email == true
              }
            />
            {formik.errors.email != undefined &&
              formik.touched.email == true && (
                <div className="text-red-600">
                  {(formik.errors.email || "") as ReactNode}
                </div>
              )}
          </div>
          <div className="flex flex-col gap-3">
            <StyledSignUpLabel>Password</StyledSignUpLabel>
            <StyledSignUpInputField
              placeholder="**********"
              type="password"
              name="password"
              onChange={formik.handleChange}
              $error={
                formik.errors.password != undefined &&
                formik.touched.password == true
              }
            />
          </div>
          {formik.errors.password != undefined &&
            formik.touched.password == true && (
              <div className="text-red-600">
                {formik.errors.password as ReactNode}
              </div>
            )}
          <div className="flex flex-col gap-3">
            <StyledSignUpLabel>Confirm Password</StyledSignUpLabel>
            <StyledSignUpInputField
              placeholder="**********"
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              $error={
                formik.errors.confirmPassword != undefined &&
                formik.touched.confirmPassword == true
              }
            />
            {formik.errors.confirmPassword != undefined &&
              formik.touched.confirmPassword == true && (
                <div className="text-red-600">
                  {(formik.errors.confirmPassword || "") as ReactNode}
                </div>
              )}
          </div>
          <StyledSignUpBtn type="button" onClick={() => formik.handleSubmit()}>
            Sign Up
          </StyledSignUpBtn>
          <p className="mb-10">
            Already a user?
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
