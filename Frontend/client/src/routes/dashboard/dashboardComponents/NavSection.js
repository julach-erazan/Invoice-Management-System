import React from "react";
import { FaUser } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";

const NavSection = ({ onViewProfile, onViewSetting }) => {
  return (
    <div className="w-full h-[36px] flex justify-end">
      <div className="flex md:flex-row-reverse">
        <div className="flex">
          <button 
            className="setting w-[36px] h-[36px] rounded-[12px] bg-[#283943] mx-[10px] flex justify-center items-center text-[20px]"
            onClick={() => onViewSetting()}
          >
            <RiSettings4Fill />
          </button>
          <button
            className="profile w-[36px] h-[36px] rounded-[50%] flex justify-center items-center bg-[#39DB7D] ml-[10px] mr-[10px] md:mr-0"
            onClick={() => onViewProfile()}
          >
            <div className="w-[32px] h-[32px] flex justify-center items-center border-[3px] border-[#1A262D] rounded-[50%] bg-[#FBB117]">
              <FaUser className="text-[#141E22] text-[14px]" />
            </div>
          </button>
        </div>
        <div className="menu w-[36px] md:w-full h-[36px] flex items-center mx-[10px]">
          Menu
        </div>
      </div>
    </div>
  );
};

export default NavSection;
