import {
  StyledPassUpdateBtn,
  StyledSecurityInputFieldWrapper,
  StyledSecurityInputLabel,
  StyledSecurityTextField,
} from "@/styled/profilePageStyles";
import React from "react";
import Security from "@/public/Settings/security";
import { useFormik } from "formik";
import { object, ref, string } from "yup";
import { cookies } from "@/config/Cookies";
import toast from "react-hot-toast";

const LoginSecurity = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = cookies.get("user_token");

  const updatePassword = async (values: Object) => {
    const updateCall = () =>
      fetch(`${BASE_URL}/password-update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

    await toast.promise(updateCall(), {
      loading: <b>Updating password...</b>,
      success: (res: any) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        formik.resetForm();
        return <b>Successfully updated!</b>;
      },
      error: (err) => <b>{err.toString()}</b>,
    });
  };

  const formik = useFormik({
    initialValues: {
      prevPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: object({
      prevPassword: string().required(),
      newPassword: string().required(),
      confirmPassword: string()
        .required()
        .oneOf([ref("newPassword")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      updatePassword(values);
    },
  });

  return (
    <div className="mt-10 flex flex-col gap-10 mb-10">
      <div className="flex flex-row">
        <div className="w-full flex flex-col gap-5">
          <h3>Change your password.</h3>
          <StyledSecurityInputFieldWrapper>
            <StyledSecurityInputLabel htmlFor="Previous Password">
              Previous Password
            </StyledSecurityInputLabel>
            <StyledSecurityTextField
              placeholder="Enter previous password."
              type="password"
              name="prevPassword"
              value={formik.values.prevPassword}
              onChange={formik.handleChange}
              $error={
                formik.errors.prevPassword != undefined &&
                formik.touched.prevPassword == true
              }
            />
            {formik.errors.prevPassword != undefined &&
              formik.touched.prevPassword == true && (
                <span className="text-red-600">previous password required</span>
              )}
          </StyledSecurityInputFieldWrapper>
          <StyledSecurityInputFieldWrapper>
            <StyledSecurityInputLabel htmlFor="New Password">
              New Password
            </StyledSecurityInputLabel>
            <StyledSecurityTextField
              placeholder="Enter new password."
              type="password"
              name="newPassword"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              $error={
                formik.errors.newPassword != undefined &&
                formik.touched.newPassword == true
              }
            />
            {formik.errors.newPassword != undefined &&
              formik.touched.newPassword == true && (
                <span className="text-red-600">new password required</span>
              )}
          </StyledSecurityInputFieldWrapper>
          <StyledSecurityInputFieldWrapper>
            <StyledSecurityInputLabel htmlFor="New Password">
              Confirm password
            </StyledSecurityInputLabel>
            <StyledSecurityTextField
              placeholder="Confirm new Password"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              $error={
                formik.errors.confirmPassword != undefined &&
                formik.touched.confirmPassword == true
              }
            />
            {formik.errors.confirmPassword != undefined &&
              formik.touched.confirmPassword == true && (
                <span className="text-red-600">
                  {(formik.errors.confirmPassword || "") as React.ReactNode}
                </span>
              )}
          </StyledSecurityInputFieldWrapper>
        </div>
        <div className="w-full flex justify-center">
          <Security />
        </div>
      </div>
      <StyledPassUpdateBtn type="button" onClick={() => formik.handleSubmit()}>
        Update Password
      </StyledPassUpdateBtn>
    </div>
  );
};

export default LoginSecurity;
