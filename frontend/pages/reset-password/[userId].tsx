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
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import toast from "react-hot-toast";
import { object, ref, string } from "yup";

const ResetPassword = () => {
  const router = useRouter();
  const { userId } = router.query;
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const resetPasswordCall = async (values: Object) => {
    try {
      const resetPass = () =>
        fetch(`${BASE_URL}/reset-password/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

      await toast.promise(resetPass(), {
        loading: <b>Resetting password...</b>,
        success: (res: any) => {
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          formik.setValues({
            password: "",
            confirmPassword: "",
          });
          router.push("/sign-in");
          return <b>Password reset successful</b>;
        },
        error: (err) => <b>{err.toString()}</b>,
      });
    } catch (error) {
      console.log("Password reset error", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: object({
      password: string().required().min(4),
      confirmPassword: string()
        .required()
        .oneOf([ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      resetPasswordCall(values);
    },
  });

  return (
    <>
      <Head>
        <title>Reset Password | Campus Book Swap</title>
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
            <p className="text-center text-xl">Reset your password!</p>
            <p className="text-center text-base text-gray-600 m-auto">
              Create a new password for your account
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <StyledLabel>New Password</StyledLabel>
            <StyledInputField
              placeholder="**********"
              type="password"
              name="password"
              onChange={formik.handleChange}
              $error={
                formik.errors.password != undefined &&
                formik.touched.password == true
              }
            />
          </div>
          {formik.errors.password != undefined &&
            formik.touched.password == true && (
              <div className="text-red-600">
                {formik.errors.password as ReactNode}
              </div>
            )}
          <div className="flex flex-col gap-3">
            <StyledLabel>Confirm New Password</StyledLabel>
            <StyledInputField
              placeholder="**********"
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              $error={
                formik.errors.confirmPassword != undefined &&
                formik.touched.confirmPassword == true
              }
            />
            {formik.errors.confirmPassword != undefined &&
              formik.touched.confirmPassword == true && (
                <div className="text-red-600">
                  {(formik.errors.confirmPassword || "") as ReactNode}
                </div>
              )}
          </div>
          <StyledSignInBtn type="button" onClick={() => formik.handleSubmit()}>
            Reset
          </StyledSignInBtn>
        </div>
      </StyledSignInContainer>
    </>
  );
};

export default ResetPassword;
