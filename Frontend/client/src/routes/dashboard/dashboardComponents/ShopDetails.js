import { React } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ShopDetails = () => {
  const id = localStorage.getItem("id");
  const [shopName, setShopName] = useState("[Your Shop Name]");
  const [logoPath, setLogoPath] = useState("Images/blanckImage.png");
  const [shopRegistationNumber, setShopRegistationNumber] = useState(
    "[Your Shop Reg Number]"
  );
  const [shopEmail, setShopEmail] = useState("[Your Shop Email]");
  const [phoneNumber, setPhoneNumber] = useState("[Your Shop Phone Number]");
  const [address, setAddress] = useState("[Your Shop Address]");

  const getShopData = async () => {
    try {
      await axios
        .post("http://localhost:8000/getShopData", {
          id,
        })
        .then((res) => {
          setShopName(res.data.shopName);
          setLogoPath("http://localhost:8000/Images/" + res.data.logoPath);
          setShopRegistationNumber(res.data.shopRegistationNumber);
          setShopEmail(res.data.email);
          setPhoneNumber(res.data.phoneNumber);
          setAddress(res.data.address);
        });
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    getShopData();
  });

  return (
    <div className="h-[90%] flex flex-col items-center p-[10px] overflow-y-scroll">
      <h2 className="text-[14px] text-[#AEB0AF]">Shop Details</h2>
      <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
        About Shop
      </h1>

      <div className="w-[90%] text-[#AEB0AF] border-b-[2px] border-[#283943] text-left pb-[5px] my-[10px]">
        <h1 className="text-[15px] text-[#E4E4E4] pb-[3px]">Logo</h1>
        <img src={logoPath} alt="Logo" width={"50px"} />
      </div>

      <div className="w-[90%] text-[#AEB0AF] border-b-[2px] border-[#283943] text-left pb-[5px] my-[10px]">
        <h1 className="text-[15px] text-[#E4E4E4] pb-[3px]">Shop Name</h1>
        <h2 className="text-[13px]">{shopName}</h2>
      </div>

      <div className="w-[90%] text-[#AEB0AF] border-b-[2px] border-[#283943] text-left pb-[5px] my-[10px]">
        <h1 className="text-[15px] text-[#E4E4E4] pb-[3px]">
          Shop Registation Number
        </h1>
        <h2 className="text-[13px]">{shopRegistationNumber}</h2>
      </div>

      <div className="w-[90%] text-[#AEB0AF] border-b-[2px] border-[#283943] text-left pb-[5px] my-[10px]">
        <h1 className="text-[15px] text-[#E4E4E4] pb-[3px]">Shop Email</h1>
        <h2 className="text-[13px]">{shopEmail}</h2>
      </div>

      <div className="w-[90%] text-[#AEB0AF] border-b-[2px] border-[#283943] text-left pb-[5px] my-[10px]">
        <h1 className="text-[15px] text-[#E4E4E4] pb-[3px]">
          Shop Phone Number
        </h1>
        <h2 className="text-[13px]">{phoneNumber}</h2>
      </div>

      <div className="w-[90%] text-[#AEB0AF] border-b-[2px] border-[#283943] text-left pb-[5px] my-[10px]">
        <h1 className="text-[15px] text-[#E4E4E4] pb-[3px]">Shop Address</h1>
        <h2 className="text-[13px]">{address}</h2>
      </div>
    </div>
  );
};

export default ShopDetails;
