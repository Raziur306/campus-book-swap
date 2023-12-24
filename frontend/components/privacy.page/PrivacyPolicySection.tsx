import {
  PrivacyText,
  PrivacyTitleText,
  PrivacyWrapper,
} from "@/styled/privacy.pageStyles";
import React from "react";
import { PrivacyData } from "./PrivacyData";

function PrivacyPolicySection() {
  return (
    <PrivacyWrapper>
      <PrivacyTitleText>Privacy Policy</PrivacyTitleText>
      <PrivacyText>Effective Date: 24-12-2023</PrivacyText>
      {PrivacyData.map((slide, index) => (
        <div key={index}>{slide.content}</div>
      ))}
    </PrivacyWrapper>
  );
}

export default PrivacyPolicySection;
