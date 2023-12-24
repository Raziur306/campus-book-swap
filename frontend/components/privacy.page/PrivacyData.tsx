import { PrivacyText, PrivacyTitle } from "@/styled/privacy.pageStyles";
import Link from "next/link";

export const PrivacyData = [
  {
    id: 1,
    content: (
      <>
        <PrivacyTitle>Information We Collect</PrivacyTitle>
        <PrivacyText>
          We collect various types of information including, but not limited to:
          <br />
          <br />
          Personal Identifiable Information (PII): Name, phone number, email
          address, postal address, card information.
          <br />
          Location Data: Information about your location which may be determined
          through your IP address or other means.
          <br />
          Usage Data: Information about how you use our website. We collect this
          information through website forms and cookies.
        </PrivacyText>
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <PrivacyTitle>How We Collect Information</PrivacyTitle>
        <PrivacyText>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information.
        </PrivacyText>
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <PrivacyTitle>How We Use Information</PrivacyTitle>
        <PrivacyText>
          We use the collected data for various purposes including, but not
          limited to:
          <br />
          <br />
          Providing Services: To provide you with the requested services. <br />{" "}
          Improving User Experience: To understand how our users interact with
          our Service and to enhance user experience. <br /> Target Audience: To
          tailor our marketing and advertising activities to a specific
          audience.
        </PrivacyText>
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <PrivacyTitle>Data Sharing </PrivacyTitle>
        <PrivacyText>
          All collected information is owned by Campus Book Swap Services. We may share
          this information with trusted partners and utilize Google Analytics
          for website analysis. However, we do not sell or rent this information
          to anyone.
        </PrivacyText>
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <PrivacyTitle>Data Usage</PrivacyTitle>
        <PrivacyText>
          The collected information is used for internal purposes such as
          analytics, marketing, and improving our business models. Additionally,
          we use this data to ensure the timely delivery of our services.
        </PrivacyText>
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        <PrivacyTitle>Data Security </PrivacyTitle>
        <PrivacyText>
          We prioritize the security of your data and have implemented
          appropriate measures to prevent unauthorized access, disclosure,
          alteration, or destruction of your personal information.
        </PrivacyText>
      </>
    ),
  },
  {
    id: 7,
    content: (
      <>
        <PrivacyTitle>User Rights </PrivacyTitle>
        <PrivacyText>
          Users have the right to:
          <br />
          <br />
          Access: Obtain information regarding the personal data we hold about
          you.
          <br />
          Update: Correct or update any inaccuracies in your personal data.
          <br />
          Delete: Request the deletion of your personal data.
          <br />
          <br />
          For any inquiries or requests regarding your data, please contact us
          through the information provided.
        </PrivacyText>
      </>
    ),
  },
  {
    id: 8,
    content: (
      <>
        <PrivacyTitle>Policy Changes </PrivacyTitle>
        <PrivacyText>
          We reserve the right to modify the Privacy Policy at any time. Updates
          will be communicated through the contact information provided and a
          popup on our website.
          <br />
          By using our Service, you agree to the collection and use of
          information in accordance with this policy.
        </PrivacyText>
      </>
    ),
  },
  {
    id: 9,
    content: (
      <>
        <PrivacyTitle>Contact Us </PrivacyTitle>
        <PrivacyText>
          If you have any questions about these Terms, please contact us at
          &nbsp;
          <Link href="mailto:20103067@iubat.edu" target="_blank">
            20103067@iubat.edu
          </Link>
        </PrivacyText>
      </>
    ),
  },
];
