"use client";
import React, { useEffect, useReducer } from "react";
import {
  StyledSubTitleText,
  StyledTitleText,
  StyledVerifyContainer,
} from "@/styled";
import VerifiedEmail from "@/public/svg/verifiedEmail";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EmailVerification = () => {
  const { userId } = useParams();
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();

  const verificationCall = async () => {
    const emailVerifier = () =>
      fetch(`${BASE_URL}/verify-email/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

    await toast.promise(emailVerifier(), {
      loading: "Verifying Email...",
      success: (res: any) => {
        if (!res.ok) {
          throw new Error(res.json());
        }
        router.push("/sign-in");
        return <b>Verification Successful!</b>;
      },
      error: (err) => <b>{"Something went wrong"}</b>,
    });
  };

  useEffect(() => {
    verificationCall();
  }, []);

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
          <p className="text-center text-xl">Email Verification Successful</p>
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
