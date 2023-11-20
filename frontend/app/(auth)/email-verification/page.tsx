import React from "react";
import { Metadata } from "next";
import { EmailVerificationNote } from "@/components/verifyEmail.page";
export const metadata: Metadata = {
  title: "Email Verification | Campus Book Swap",
};

const EmailVerification = () => {
  return <EmailVerificationNote />;
};

export default EmailVerification;
