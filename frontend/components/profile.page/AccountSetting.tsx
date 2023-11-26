import Image from "next/image";
import React, { useState } from "react";
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

const AccountSetting = () => {
  const [isDisable, setIsDisable] = useState(true);
  const handleEditPenClick = () => {
    setIsDisable(!isDisable);
  };

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
      <div className="flex justify-end p-10">
        <AccountEditPenWrapper onClick={handleEditPenClick}>
          <EditPen />
        </AccountEditPenWrapper>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel htmlFor="Full Name">Full Name</StyledSettingInputLabel>
            <StyledSettingsTextField
              disabled={isDisable}
              placeholder="Full name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel htmlFor="University Email ID">
              University Email ID
            </StyledSettingInputLabel>
            <StyledSettingsTextField
              disabled={isDisable}
              placeholder="example@iubat.edu"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel htmlFor="Student ID">Student ID</StyledSettingInputLabel>
            <StyledSettingsTextField
              disabled={isDisable}
              placeholder="Enter your University student #ID"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <StyledSettingInputLabel htmlFor="Phone Number">Phone Number</StyledSettingInputLabel>
            <StyledSettingsTextField
              disabled={isDisable}
              placeholder="Enter your phone number"
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <StyledSettingInputLabel htmlFor="Bio">Bio</StyledSettingInputLabel>
          <StyledSettingsBioTextArea
            disabled={isDisable}
            placeholder="Write about you."
          />
        </div>

        <StyledProfileUpdateBtn disabled={isDisable}>
          Update Profile
        </StyledProfileUpdateBtn>
      </div>
    </div>
  );
};

export default AccountSetting;
