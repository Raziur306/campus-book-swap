import {
  ProfilePageContainer,
  StyledProfileMenuUl,
} from "@/styled/profilePageStyles";
import React, { useEffect, useState } from "react";
import { AccountSetting, LoginSecurity } from ".";
import { cookies } from "@/config/Cookies";

const ProfileComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <div>
      <ProfilePageContainer>
        <StyledProfileMenuUl className="flex flex-row gap-5">
          <li
            onClick={() => setSelectedMenu(0)}
            className={`${selectedMenu == 0 ? "active" : ""} cursor-pointer`}
          >
            Account Settings
          </li>
          <li
            onClick={() => setSelectedMenu(1)}
            className={`${selectedMenu == 1 ? "active" : ""} cursor-pointer`}
          >
            Login & Security
          </li>
        </StyledProfileMenuUl>
        {selectedMenu == 0 && <AccountSetting />}
        {selectedMenu == 1 && <LoginSecurity />}
      </ProfilePageContainer>
    </div>
  );
};

export default ProfileComponent;
