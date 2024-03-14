import { useState } from "react";
import { React } from "react";
import ProfileNavbar from "./ProfileNavbar";
import UpdateProfilePic from "./UpdateProfilePic";
import UpdatePassword from "./UpdatePassword";

const ProfileSetting = ({onClose}) => {
  const [_viewUpdateProfilePic, setViewUpdateProfilePic] = useState(true);
  const [_viewUpdatePassword, setViewUpdatePassword] = useState(false);

  const viewUpdateProfilePic = () => {
    setViewUpdateProfilePic(true);
    setViewUpdatePassword(false);
  }

  const viewUpdateProfileInfo = () => {
    setViewUpdateProfilePic(false);
    setViewUpdatePassword(false);
  }

  const viewUpdatePassword = () => {
    setViewUpdateProfilePic(false);
    setViewUpdatePassword(true);
  }

  return (
    <div className="w-full h-full lg:h-[90%] flex justify-center items-center">
      <div className="w-[90%] min-w-[310px] md:w-[500px] h-[500px] bg-[#1A262D] rounded-[15px] p-[10px] ">
        <ProfileNavbar 
          onViewUpdateProfilePic = {viewUpdateProfilePic}
          onViewUpdatePassword = {viewUpdatePassword}
          onClose ={onClose}
        />
        {_viewUpdateProfilePic ? <UpdateProfilePic/> : ""}
        {_viewUpdatePassword ? <UpdatePassword/> : ""}
      </div>
    </div>
  );
};

export default ProfileSetting;
