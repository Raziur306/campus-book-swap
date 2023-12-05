import React from "react";
import { SignInSection } from "@/components/signIn.Page";
import SharedLayout from "@/layout/SharedLayout";



const SignIn = () => {
  return (
    <SharedLayout title="Sign In">
      <SignInSection />
    </SharedLayout>
  );
};

export default SignIn;
