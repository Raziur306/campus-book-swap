import { SideBar } from "@/components/admin.page";
import PrivacyPolicySection from "@/components/privacy.page/PrivacyPolicySection";
import { Leftbar } from "@/components/shared";
import SharedLayout from "@/layout/SharedLayout";
import Head from "next/head";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <SharedLayout SideBar={<Leftbar />} title={"Privacy Policy"}>
        <PrivacyPolicySection />
      </SharedLayout>
    </>
  );
};

export default PrivacyPolicy;
