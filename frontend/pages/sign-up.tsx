import { SignUpSection } from "@/components/signUp.page";
import SharedLayout from "@/layout/SharedLayout";
import React from "react";

export const metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  return (
    <SharedLayout title="Sign Up">
      <SignUpSection />;
    </SharedLayout>
  );
};

export default SignUp;
