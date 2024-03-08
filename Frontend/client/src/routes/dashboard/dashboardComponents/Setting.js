import React from "react";
import { MdPhoneAndroid } from "react-icons/md";

const Setting = () => {
  let Links = [
    {
      name: "Profile",
      img: <MdPhoneAndroid />,
      discription: "Update your profile details",
    },
    {
      name: "Shop",
      img: <MdPhoneAndroid />,
      discription: "Update your shop details",
    },
    { name: "Mode", img: <MdPhoneAndroid />, discription: "Change app mode" },
  ];
  return (
    <div className="w-[250px] rounded-[15px] text-[#AEB0AF] bg-[#1A262D] p-[10px] absolute z-10 top-[90px] right-[10px]">
      <ul>
        {Links.map((link) => (
          <li key={link.name}>
            <button 
                className="w-full border-b-[2px] border-[#283943] text-left pb-[5px] my-[10px]"
            >
              <table>
                <tbody>
                  <tr>
                    <td rowSpan={2}>
                      <div className="w-[32px] h-[32px] rounded-[12px] bg-[#283943] mr-[15px] flex justify-center items-center text-[18px]">
                        <h1>{link.img}</h1>
                      </div>
                    </td>
                    <td>
                      <h1 className="text-[15px] text-[#E4E4E4]">
                        {link.name}
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="text-[13px]">{link.discription}</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Setting;
