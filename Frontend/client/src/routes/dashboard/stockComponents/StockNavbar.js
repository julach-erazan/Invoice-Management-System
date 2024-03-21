import React from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { MdOutlineAddCard } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const ShopNavbar = ({ onViewAddStocks, onViewBrand, onClose }) => {
  let Links = [
    {
      name: "Add Brands",
      img: <MdOutlineAddToPhotos className="text-[15px]" />,
      method: onViewBrand,
    },
    {
      name: "Add Stocks",
      img: <MdOutlineAddCard className="text-[15px]" />,
      method: onViewAddStocks,
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
