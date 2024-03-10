import { useState } from "react";
import { React } from "react";
import ProfileNavbar from "./ProfileNavbar";
import UpdateProfilePic from "./UpdateProfilePic";
import UpdateProfileInfo from "./UpdateProfileInfo";
import UpdatePassword from "./UpdatePassword";

const ProfileSetting = () => {
  const [_viewUpdateProfilePic, setViewUpdateProfilePic] = useState(true);
  const [_viewUpdateProfileInfo, setViewUpdateProfileInfo] = useState(false);
  const [_viewUpdatePassword, setViewUpdatePassword] = useState(false);

  const viewUpdateProfilePic = () => {
    setViewUpdateProfilePic(true);
    setViewUpdateProfileInfo(false);
    setViewUpdatePassword(false);
  }

  const viewUpdateProfileInfo = () => {
    setViewUpdateProfilePic(false);
    setViewUpdateProfileInfo(true);
    setViewUpdatePassword(false);
  }

  const viewUpdatePassword = () => {
    setViewUpdateProfilePic(false);
    setViewUpdateProfileInfo(false);
    setViewUpdatePassword(true);
  }

  return (
    <div className="w-full h-full md:h-[90%] flex justify-center items-center">
      <div className="w-full min-w-[310px] md:w-[500px] h-[500px] bg-[#1A262D] rounded-[15px] p-[10px] ">
        <ProfileNavbar 
          onViewUpdateProfilePic = {viewUpdateProfilePic} 
          onViewUpdateProfileInfo = {viewUpdateProfileInfo}
          onViewUpdatePassword = {viewUpdatePassword}
        />
        {_viewUpdateProfilePic ? <UpdateProfilePic/> : ""}
        {_viewUpdateProfileInfo ? <UpdateProfileInfo/> : ""}
        {_viewUpdatePassword ? <UpdatePassword/> : ""}
      </div>
    </div>
  );
};

export default ProfileSetting;
