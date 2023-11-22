import { EmailVerification } from "@/components/verifyEmail.page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Verify Email",
};

const VerifyEmail = () => {
  return <EmailVerification />;
};

export default VerifyEmail;
