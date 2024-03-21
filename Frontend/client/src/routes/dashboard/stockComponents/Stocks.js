import React from "react";
import { useState } from "react";
import AddBrands from "./AddBrands";
import AddStocks from "./AddStocks";
import ShopNavbar from "./StockNavbar";
import { IoPersonAdd } from "react-icons/io5";

const Stocks = () => {
  const [_viewStocks, setViewStocks] = useState(true);

  const [_addBrand, setAddBrand] = useState(true);
  const [_addStocks, setAddStoks] = useState(false);

  const addProduct = () =>{
    setViewStocks(false);
  }

  const viewAddStoks = () => {
    setAddStoks(true);
    setAddBrand(false);
  };

  const viewAddBrand = () => {
    setAddStoks(false);
    setAddBrand(true);
  };

  const close = () => {
    setViewStocks(true);
    setAddStoks(false);
    setAddBrand(false);
  };

  return (
    <div className="w-full h-full lg:h-[90%] flex flex-col items-center overflow-y-scroll pt-[15px]">
      {_viewStocks ? (<div className="w-full h-[50px] flex justify-end items-center">
          <button
        className="w-[150px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] flex justify-evenly items-center text-[#E4E4E4]"
        onClick={addProduct}
      >
        <IoPersonAdd className="text-[16px]"/> Add Product
      </button>
        </div>) : (<div className="h-full flex items-center">
          <div className="w-[90%] min-w-[310px] md:w-[500px] h-[500px] bg-[#1A262D] rounded-[15px] p-[10px]">
            <ShopNavbar
              onViewAddStocks={viewAddStoks}
              onViewBrand={viewAddBrand}
              onClose={close}
            />
            {_addStocks ? <AddStocks /> : ""}
            {_addBrand ? <AddBrands /> : ""}
          </div>
        </div>)}    
    </div>
  );
};

export default Stocks;
