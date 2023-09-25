"use client";
import Image from "next/image";
import React from "react";
import Donation from "../../public/Settings/Donation";
import Book from "../../public/Settings/Book";
import {
  SettingsCardWrapper,
  StyledProfileUpdateBtn,
  StyledSettingInputLabel,
  StyledSettingsBioTextArea,
  StyledSettingsTextField,
} from "@/styled/profilePageStyles";

const AccountSetting = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-row gap-40">
        <div className="flex flex-col items-center cursor-pointer gap-5">
          <p>Your Profile Picture</p>
          <div className="relative w-24 aspect-[1/1]">
            <Image
              fill
              alt="Profile"
              src={"/images/avatar.jpg"}
              className="rounded-full"
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
            <p className="text-white text-3xl">Readings</p>
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

      <div className="flex flex-col gap-8 mt-10">
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel>Full Name</StyledSettingInputLabel>
            <StyledSettingsTextField placeholder="Full name" type="text" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel>University Email Id</StyledSettingInputLabel>
            <StyledSettingsTextField placeholder="Full name" type="email" />
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel>Student Id</StyledSettingInputLabel>
            <StyledSettingsTextField placeholder="Enter your University student #ID" type="number" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel>Phone Number</StyledSettingInputLabel>
            <StyledSettingsTextField placeholder="Enter your phone number" type="number" />
          </div>
        </div>
        <StyledSettingsBioTextArea placeholder="Write about you." />

        <StyledProfileUpdateBtn>Update Profile</StyledProfileUpdateBtn>
      </div>
    </div>
  );
};

export default AccountSetting;
