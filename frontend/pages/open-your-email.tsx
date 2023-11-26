import { EmailVerificationNote } from "@/components/verifyEmail.page";
import SharedLayout from "@/layout/SharedLayout";
import React from "react";

const OpenYourEmail = () => {
  return (
    <SharedLayout title="Open Your Email">
      <EmailVerificationNote />
    </SharedLayout>
  );
};

export default OpenYourEmail;
