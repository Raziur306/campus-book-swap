"use client";
import {
  StyledPassUpdateBtn,
  StyledSecurityInputFieldWrapper,
  StyledSecurityInputLabel,
  StyledSecurityTextField,
} from "@/styled/profilePageStyles";
import React from "react";
import Security from "@/public/Settings/security";

const LoginSecurity = () => {
  return (
    <div className="mt-10 flex flex-col gap-10 mb-10">
      <div className="flex flex-row">
        <div className="w-full flex flex-col gap-5">
          <h3>Change your password.</h3>
          <StyledSecurityInputFieldWrapper>
            <StyledSecurityInputLabel htmlFor="Previous Password">
              Previous Password
            </StyledSecurityInputLabel>
            <StyledSecurityTextField
              placeholder="Enter previous password."
              type="password"
            />
          </StyledSecurityInputFieldWrapper>
          <StyledSecurityInputFieldWrapper>
            <StyledSecurityInputLabel htmlFor="New Password">
              New Password
            </StyledSecurityInputLabel>
            <StyledSecurityTextField
              placeholder="Enter new password."
              type="password"
            />
          </StyledSecurityInputFieldWrapper>
          <StyledSecurityInputFieldWrapper>
            <StyledSecurityInputLabel htmlFor="New Password">
              Confirm password
            </StyledSecurityInputLabel>
            <StyledSecurityTextField
              placeholder="Confirm new Password"
              type="password"
            />
          </StyledSecurityInputFieldWrapper>
        </div>
        <div className="w-full flex justify-center">
          <Security />
        </div>
      </div>
      <StyledPassUpdateBtn>Update Password</StyledPassUpdateBtn>
    </div>
  );
};

export default LoginSecurity;
