import React from "react";
import { FaCamera } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ProfileNavbar = ({
  onViewUpdateProfilePic,
  onViewUpdatePassword,
  onClose,
}) => {
  let Links = [
    {
      name: "Profile Picture",
      img: <FaCamera className="text-[15px]" />,
      method: onViewUpdateProfilePic,
    },
    {
      name: "Change Password",
      img: <FaKey className="text-[15px]" />,
      method: onViewUpdatePassword,
    },
    {
      name: "Close",
      img: <IoClose className="text-[18px]" />,
      method: onClose,
    },
  ];
  return (
    <div className="w-full h-[50px] bg-[#1A262D] rounded-t-[15px] flex justify-center items-center">
      <ul className="w-full flex justify-evenly">
        {Links.map((link) => (
          <li key={link.name}>
            <div 
              className="flex justify-center items-center w-[38px] h-[38px]">
              <button
                className="w-[32px] h-[32px] rounded-[12px] bg-[#283943] flex justify-center items-center"
                onClick={() => link.method()}
              >
                {link.img}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileNavbar;
