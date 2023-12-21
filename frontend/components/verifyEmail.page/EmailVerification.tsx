import React, { useEffect, useReducer, useState } from "react";
import {
  StyledSubTitleText,
  StyledTitleText,
  StyledVerifyContainer,
} from "@/styled";
import VerifiedEmail from "@/public/svg/verifiedEmail";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const EmailVerification = () => {
  const router = useRouter();
  const { userId } = router.query;
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [isEmailVerified, setIsEmailVerified] = useState(true);

  const verificationCall = async () => {
    try {
      const emailVerifier = () =>
        fetch(`${BASE_URL}/verify-email/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      await toast.promise(emailVerifier(), {
        loading: <b>Verifying Email...</b>,
        success: (res: any) => {
          if (!res.ok) {
            setIsEmailVerified(false);
            throw new Error(res.json());
          }
          setIsEmailVerified(true);
          router.push("/sign-in");
          return <b>Verification Successful!</b>;
        },
        error: (err) => <b>{"Something went wrong"}</b>,
      });
    } catch (error) {
      setIsEmailVerified(false);
      console.log(error);
    }
  };

  useEffect(() => {
    verificationCall();
  }, [userId]);

  return (
    <StyledVerifyContainer>
      <div className=" flex flex-col bg-white rounded-lg p-10 m-auto gap-5 shadow-xl">
        <div className="m-5">
          <StyledTitleText>
            Campus <span>Book</span>
          </StyledTitleText>
          <StyledSubTitleText>Swap</StyledSubTitleText>
        </div>
        <div className="flex flex-col gap-3 m-3">
          <p className="text-center text-xl">
            Email Verification {`${isEmailVerified ? "" : "not"}`} Successful
          </p>
          <p className="text-center text-base text-gray-600">
            Thank you for successfully verifying your email! You are now ready
            <br />
            to embark on the next phase of your journey within the system.
            <br />
            Let&apos;s continue this exciting adventure together!
          </p>
        </div>
        <VerifiedEmail />
      </div>
    </StyledVerifyContainer>
  );
};

export default EmailVerification;
