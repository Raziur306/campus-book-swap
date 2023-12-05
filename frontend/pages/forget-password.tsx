import {
  StyledInputField,
  StyledLabel,
  StyledSignInBtn,
  StyledSignInContainer,
  StyledSubTitleText,
  StyledTitleText,
} from "@/styled";
import { useFormik } from "formik";
import Head from "next/head";
import React from "react";
import toast from "react-hot-toast";
import { object, string } from "yup";

const ForgetPassword = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const sendEmailCall = async (value: Object) => {
    try {
      const sendEmailCall = () =>
        fetch(`${BASE_URL}/forget-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        });

      await toast.promise(sendEmailCall(), {
        loading: <b>Sending reset password email...</b>,
        success: (res: any) => {
          if (!res.ok) {
            throw new Error("No account belongs to this email");
          }
          formik.setValues({ email: "" });
          formik.setTouched({ email: false });
          return <b>Email send successfully.</b>;
        },
        error: (err) => <b>{err.toString()}</b>,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: object({
      email: string()
        .email()
        .trim()
        .required()
        .test(
          "is-edu-email",
          "Email must be from an education domain",
          (value: any) => {
            if (!value) {
              return false;
            }
            const emailDomain = value.split("@")[1];
            return emailDomain && emailDomain.toLowerCase().endsWith("edu");
          }
        ),
    }),
    onSubmit: (value) => {
      sendEmailCall(value);
    },
  });

  return (
    <>
      <Head>
        <title>Forget Password | Campus Book Swap</title>
      </Head>
      <StyledSignInContainer>
        <div className=" flex flex-col bg-white rounded-lg p-10 m-auto gap-5 shadow-md">
          <div className="m-5">
            <StyledTitleText>
              Campus <span>Book</span>
            </StyledTitleText>
            <StyledSubTitleText>Swap</StyledSubTitleText>
          </div>
          <div className="flex flex-col gap-3 m-3">
            <p className="text-center text-xl">Forget your password?</p>
            <p className="text-center text-base text-gray-600 m-auto">
              You can reset your password by putting
              <br />
              your account email
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <StyledLabel>Email</StyledLabel>
            <StyledInputField
              value={formik.values.email}
              placeholder="example@iubat.edu"
              name="email"
              onChange={formik.handleChange}
              type="email"
              $error={
                formik.errors.email != undefined && formik.touched.email == true
              }
            />
            {formik.errors.email != undefined &&
              formik.touched.email == true && (
                <div className="text-red-600">
                  {(formik.errors.email || "") as React.ReactNode}
                </div>
              )}
            <StyledSignInBtn
              type="button"
              onClick={() => formik.handleSubmit()}
            >
              Forget Password
            </StyledSignInBtn>
          </div>
        </div>
      </StyledSignInContainer>
    </>
  );
};

export default ForgetPassword;
