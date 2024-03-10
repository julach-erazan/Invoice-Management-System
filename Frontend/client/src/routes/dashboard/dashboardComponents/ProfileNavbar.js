import React from "react";
import { FaCamera } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

const ProfileNavbar = ({onViewUpdateProfilePic, onViewUpdateProfileInfo, onViewUpdatePassword}) => {
  let Links = [
    {
      name: "Profile Picture",
      img: <FaCamera className="text-[15px]" />,
      method: onViewUpdateProfilePic,
    },
    {
      name: "Profile Information",
      img: <FaUser className="text-[15px]" />,
      method: onViewUpdateProfileInfo,
    },
    {
      name: "Change Password",
      img: <FaKey className="text-[15px]" />,
      method: onViewUpdatePassword,
    },
  ];
  return (
    <div className="w-full h-[50px] bg-[#1A262D] rounded-t-[15px] flex justify-center items-center">
      <ul className="w-full flex justify-evenly">
        {Links.map((link) => (
          <li key={link.name}>
            <button 
            className="w-[32px] h-[32px] rounded-[12px] bg-[#283943] flex justify-center items-center"
            onClick={() => link.method()}
            >
              {link.img}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileNavbar;
