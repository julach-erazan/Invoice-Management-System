import React from "react";
import { FiLogOut } from "react-icons/fi";

const Profile = ({ firstName, lastName, email, phoneNumber }) => {
  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location = "/";
  };
  return (
    <div className="w-[250px] rounded-[15px] text-[#AEB0AF] bg-[#1A262D] p-[10px] absolute z-10 top-[90px] right-[10px]">
      <div className="profile photo w-full h-[100px] flex justify-center items-center">
        <img
          className="w-[80px] h-[80px] bg-black rounded-[50%]"
          src=""
          alt="Profile"
        />
      </div>

      <div className="name w-full text-[25px] text-[#E4E4E4] font-semibold pt-[5px]">
        <h1>
          {firstName}&nbsp;&nbsp;{lastName}
        </h1>
      </div>

      <div className="email w-full border-b-[2px] border-[#283943] pb-[5px] my-[10px]"> 
        <table>
          <tr>
            <td rowSpan={2}>
              <div className="w-[32px] h-[32px] rounded-[8px] bg-[#283943] mr-[15px]"></div>
            </td>
            <td>
              <h1 className="text-[15px] text-[#E4E4E4]">Email Address</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text-[13px]">{email}</h2>
            </td>
          </tr>
        </table>
      </div>

      <div className="phone w-full border-b-[2px] border-[#283943] pb-[5px] my-[10px]">
        <table>
          <tr>
            <td rowSpan={2}>
              <div className="w-[32px] h-[32px] rounded-[8px] bg-[#283943] mr-[15px]"></div>
            </td>
            <td>
              <h1 className="text-[15px] text-[#E4E4E4]">Phone Number</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text-[13px]">{"0" + phoneNumber}</h2>
            </td>
          </tr>
        </table>
      </div>

      <div className="logout w-full  mt-[25px] mb-[10px] flex justify-center items-center">
        <button 
        className="w-[120px] h-[36px] text-black font-semibold rounded-[13px] bg-[#39DB7D] flex items-center justify-evenly"
        onClick={handleLogout}
        >
            <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
