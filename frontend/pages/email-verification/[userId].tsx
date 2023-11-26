import { EmailVerification } from "@/components/verifyEmail.page";
import SharedLayout from "@/layout/SharedLayout";
import { Metadata } from "next";
import React from "react";

const VerifyEmail = () => {
  return (
    <SharedLayout title="Verify Email">
      <EmailVerification />;
    </SharedLayout>
  );
};

export default VerifyEmail;
