import React from "react";
import { useState } from "react";
import OptionsNav from "./OptionsNav";
import ShopRegister from "./ShopRegister";

const ShopSetting = () => {
//   const [close, setClose] = useState(true);

//   const handleClose = () => {
//     setClose(!close);
//   };

  return (
    <div className="w-full h-[90%] pt-[10px] flex justify-center items-center overflow-y-scroll">
     <ShopRegister/>
    </div>
  );
};

export default ShopSetting;
