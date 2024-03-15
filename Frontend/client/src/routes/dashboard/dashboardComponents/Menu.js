import React from "react";
import { RiDashboard3Fill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const Menu = ({ onViewUser, onViewDashboard }) => {
  let Links = [
    {
      name: "Dashboard",
      img: <RiDashboard3Fill className="text-[15px]" />,
      method: onViewDashboard,
    },
    {
      name: "Stocks",
      img: <AiOutlineStock className="text-[15px]" />,
      method: onViewUser,
    },

    {
      name: "Users",
      img: <FaUsers className="text-[15px]" />,
      method: onViewUser,
    },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center mr-[10px]">
      <ul className="w-full flex justify-end">
        {Links.map((link) => (
          <li key={link.name}>
            <button 
              className="menu h-[32px] flex justify-center items-center rounded-[16px] border-[2px] border-[#283943] px-[10px] text-[#AEB0AF] font-bold hover:text-[#eaeaea] hover:bg-[#283943] mx-[10px]"
              onClick={() => link.method()}
            >
              <div className="w-full flex justify-center items-center">
                <span>{link.img}</span>
                <h1 className="text-[12px] ml-[5px]">{link.name}</h1>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
