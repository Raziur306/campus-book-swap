import {
  StyledForgetPassText,
  StyledInputField,
  StyledLabel,
  StyledSignInBtn,
  StyledSignInContainer,
  StyledSubTitleText,
  StyledTitleText,
} from "@/styled";
import { CookiesExpires } from "@/utils/Task";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { object, string } from "yup";

const SignInSection = () => {
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const cookies = new Cookies(null, { path: "/" });

  const handleSignUpClick = () => {
    router.push("/sign-up");
  };

  const loginCall = async (values: Object) => {
    try {
      const login = () =>
        fetch(`${BASE_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

      await toast.promise(login(), {
        loading: <b>Logging in...</b>,
        success: (res: any) => {
          if (!res.ok) {
            throw new Error(res.json());
          }
          generateCookie(res, values);
          return <b>Login Successful!</b>;
        },
        error: (err) => <b>{"Something went wrong"}</b>,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const generateCookie = async (res: any, values: any) => {
    const data = await res.json();
    const rememberMe = values?.rememberMe || false;
    cookies.set("user_token", data.token, {
      expires: rememberMe ? CookiesExpires : undefined,
    });
    router.push("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: object({
      email: string().required().email().trim(),
      password: string().required(),
    }),
    onSubmit: (values) => {
      loginCall(values);
    },
  });

  return (
    <>
      <StyledSignInContainer>
        <div className=" flex flex-col bg-white rounded-lg p-10 m-auto gap-5 shadow-md">
          <div className="m-5">
            <StyledTitleText>
              Campus <span>Book</span>
            </StyledTitleText>
            <StyledSubTitleText>Swap</StyledSubTitleText>
          </div>
          <div className="flex flex-col gap-3 m-3">
            <p className="text-center text-xl">Welcome Back !</p>
            <p className="text-center text-base text-gray-600">
              Sign in to continue to your Digital Library
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <StyledLabel>Email</StyledLabel>
            <StyledInputField
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
          </div>
          <div className="flex flex-col gap-3">
            <StyledLabel>Password</StyledLabel>
            <StyledInputField
              name="password"
              onChange={formik.handleChange}
              placeholder="**********"
              type="password"
              $error={
                formik.errors.password != undefined &&
                formik.touched.password == true
              }
            />
            {formik.errors.password != undefined &&
              formik.touched.password == true && (
                <div className="text-red-600">
                  {(formik.errors.password || "") as React.ReactNode}
                </div>
              )}
          </div>
          <div className="flex flex-row gap-3 justify-between">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="rememberMe"
                onChange={formik.handleChange}
              />
              <label>Remember Me</label>
            </div>
            <Link href={"/forget-password"}>
              <StyledForgetPassText>Forgot password?</StyledForgetPassText>
            </Link>
          </div>
          <StyledSignInBtn type="button" onClick={() => formik.handleSubmit()}>
            Sign In
          </StyledSignInBtn>
          <p className="mb-10">
            New User?{" "}
            <span
              onClick={handleSignUpClick}
              className="underline cursor-pointer font-bold"
            >
              Register Here
            </span>
          </p>
        </div>
      </StyledSignInContainer>
    </>
  );
};

export default SignInSection;
