import React from "react";
import { useState } from "react";
import ShopDetails from "./ShopDetails";
import ShopNavbar from "./ShopNavbar";
import ShopRegister from "./ShopRegister";

const ShopSetting = ({ onClose }) => {
  const [_viewDetails, setViewDetails] = useState(true);
  const [_viewUpdate, setViewUpdate] = useState(false);

  const viewDetails = () => {
    setViewDetails(true);
    setViewUpdate(false);
  };

  const viewUpdate = () => {
    setViewDetails(false);
    setViewUpdate(true);
  };

  return (
    <div className="w-full h-full lg:h-[90%] flex justify-center items-center">
      <div className="w-[90%] min-w-[310px] md:w-[500px] h-[500px] bg-[#1A262D] rounded-[15px] p-[10px]">
        <ShopNavbar onViewDetails={viewDetails} onViewUpdate={viewUpdate} onClose = {onClose}/>
        {_viewDetails ? <ShopDetails /> : ""}
        {_viewUpdate ? <ShopRegister /> : ""}
      </div>
    </div>
  );
};

export default ShopSetting;
