import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import Donation from "@/public/Settings/Donation";
import Book from "@/public/Settings/Book";
import EditPen from "@/public/Settings/EditPen";
import {
  AccountEditPenWrapper,
  SettingsCardWrapper,
  StyledProfileUpdateBtn,
  StyledSettingInputLabel,
  StyledSettingsBioTextArea,
  StyledSettingsTextField,
} from "@/styled/profilePageStyles";
import { cookies } from "@/config/Cookies";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import toast from "react-hot-toast";
import { CommonApiContext } from "@/context/CommonApiContext";

const AccountSetting = () => {
  const { getProfileInfoCall, profileInfo } = useContext(CommonApiContext);
  const [isDisable, setIsDisable] = useState(true);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = cookies.get("user_token");
  const imgPickerRef = useRef<HTMLInputElement | null>(null);

  const handleEditPenClick = () => {
    setIsDisable(!isDisable);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      studentId: "",
      phone: "",
      bio: "",
      image: "",
    },
    validationSchema: object({
      name: string().required(),
      email: string().email().required(),
      studentId: number().required(),
      phone: number().required(),
      bio: string().required(),
      image: string(),
    }),
    onSubmit: (value) => {
      updateProfile(value);
    },
  });

  useEffect(() => {
    formik.setValues(profileInfo);
  }, [profileInfo]);

  const updateProfile = async (value: Object) => {
    try {
      if (!formik.values.image) {
        formik.setValues({
          ...formik.values,
          image: "",
        });
      }
      const updateCall = () =>
        fetch(`${BASE_URL}/profile`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(value),
        });
      await toast.promise(updateCall(), {
        loading: <b>Updating profile...</b>,
        success: (res: any) => {
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          setIsDisable(true);
          return <b>Profile update successful</b>;
        },
        error: (err) => <b>{err.toString()}</b>,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        formik.setValues({
          ...formik.values,
          image: imageUrl,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    imgPickerRef.current?.click();
  };

  useEffect(() => {
    if (isDisable) {
      getProfileInfoCall();
    }
  }, [isDisable]);

  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-row gap-40">
        <div
          className="flex flex-col items-center cursor-pointer gap-5"
          onClick={handleUploadClick}
        >
          <input
            style={{ display: "none" }}
            ref={imgPickerRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <p>Your Profile Picture</p>
          <div className="relative w-24 aspect-[1/1]">
            <Image
              fill
              alt="Profile"
              src={`${formik.values.image || "/images/default.jpg"}`}
              className="rounded-full"
              sizes={"(max-width: 768px) 100vh, 96px"}
            />
          </div>
          <p className="text-sm underline text-[#909090]">Upload a new photo</p>
        </div>
        <div className="flex flex-row gap-10">
          <SettingsCardWrapper className="bg-[#F27851]">
            <div className="flex flex-row items-center gap-5">
              <div className="bg-[#FFF] p-3 rounded-lg">
                <Book />
              </div>
              <p className="text-white text-4xl">120</p>
            </div>
            <p className="text-white text-3xl">Requested</p>
          </SettingsCardWrapper>
          <SettingsCardWrapper className="bg-[#926CFF]">
            <div className="flex flex-row items-center gap-5">
              <div className="bg-[#FFF] p-3 rounded-lg">
                <Donation />
              </div>
              <p className="text-white text-4xl">120</p>
            </div>
            <p className="text-white text-3xl">Contribution</p>
          </SettingsCardWrapper>
        </div>
      </div>
      <div className="flex justify-end p-10">
        <AccountEditPenWrapper onClick={handleEditPenClick}>
          <EditPen />
        </AccountEditPenWrapper>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel htmlFor="Full Name">
              Full Name
            </StyledSettingInputLabel>
            <StyledSettingsTextField
              disabled={isDisable}
              placeholder="Full name"
              type="text"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              $error={
                formik.errors.name != undefined && formik.touched.name == true
              }
            />
            {formik.errors.name != undefined && formik.touched.name == true && (
              <span className="text-red-600">
                {(formik.errors.name || "") as React.ReactNode}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel htmlFor="University Email ID">
              University Email ID
            </StyledSettingInputLabel>
            <StyledSettingsTextField
              disabled={isDisable}
              value={formik.values.email}
              placeholder="example@iubat.edu"
              type="email"
              name="email"
              onChange={formik.handleChange}
              $error={
                formik.errors.email != undefined && formik.touched.email == true
              }
            />
            {formik.errors.email != undefined &&
              formik.touched.email == true && (
                <span className="text-red-600">
                  {(formik.errors.email || "") as React.ReactNode}
                </span>
              )}
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel htmlFor="Student ID">
              Student ID
            </StyledSettingInputLabel>
            <StyledSettingsTextField
              disabled={isDisable}
              placeholder="Enter your University student #ID"
              type="number"
              value={formik.values.studentId}
              name="studentId"
              onChange={formik.handleChange}
              onWheel={(e: any) => e.target.blur()}
              min={1}
              $error={
                formik.errors.studentId != undefined &&
                formik.touched.studentId == true
              }
            />
            {formik.errors.studentId != undefined &&
              formik.touched.studentId == true && (
                <span className="text-red-600">
                  {(formik.errors.studentId || "") as React.ReactNode}
                </span>
              )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel htmlFor="Phone Number">
              Phone Number
            </StyledSettingInputLabel>
            <StyledSettingsTextField
              disabled={isDisable}
              placeholder="Enter your phone number"
              type="number"
              value={formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              onWheel={(e: any) => e.target.blur()}
              min={1}
              $error={
                formik.errors.phone != undefined && formik.touched.phone == true
              }
            />
            {formik.errors.phone != undefined &&
              formik.touched.phone == true && (
                <span className="text-red-600">
                  {(formik.errors.phone || "") as React.ReactNode}
                </span>
              )}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <StyledSettingInputLabel htmlFor="Bio">Bio</StyledSettingInputLabel>
          <StyledSettingsBioTextArea
            disabled={isDisable}
            placeholder="Write about you."
            value={formik.values.bio}
            name="bio"
            onChange={formik.handleChange}
            $error={
              formik.errors.bio != undefined && formik.touched.bio == true
            }
          />
          {formik.errors.bio != undefined && formik.touched.bio == true && (
            <span className="text-red-600">
              {(formik.errors.bio || "") as React.ReactNode}
            </span>
          )}
        </div>

        <StyledProfileUpdateBtn
          type="button"
          onClick={() => formik.handleSubmit()}
          disabled={isDisable}
        >
          Update Profile
        </StyledProfileUpdateBtn>
      </div>
    </div>
  );
};

export default AccountSetting;
