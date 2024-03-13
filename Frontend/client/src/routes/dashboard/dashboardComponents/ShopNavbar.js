import React from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ShopNavbar = ({onViewDetails, onViewUpdate, onClose}) => {
  let Links = [
    {
      name: "Profile Information",
      img: <FaShoppingCart className="text-[15px]" />,
      method: onViewDetails,
    },
    {
      name: "Profile Picture",
      img: <GrDocumentUpdate className="text-[15px]" />,
      method: onViewUpdate,
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

export default ShopNavbar;
