import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="w-[170px] h-full flex flex-col justify-center items-center text-center text-[#01579B]">
      <img
        src={logo}
        alt="Logo"
        className="w-[60px] lg:w-[150px] h-[60px] lg:h-[150px]"
      />
      <h1 className="text-[20px] lg:text-[25px]">EXXPLAN</h1>
      <h2 className="text-[12px] lg:text-[15px]">Elevate Your Venture</h2>
    </div>
  );
};

export default Header;
