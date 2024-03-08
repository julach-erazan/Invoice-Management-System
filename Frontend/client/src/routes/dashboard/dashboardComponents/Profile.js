import React from "react";
import { FiLogOut } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";

const Profile = ({ firstName, lastName, email, phoneNumber }) => {
  let Links = [
    {
      name: "Email Address",
      img: <MdEmail />,
      discription: email,
    },
    {
      name: "Phone Number",
      img: <MdPhoneAndroid />,
      discription: phoneNumber,
    },
  ];

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

      <div className="name w-full text-[25px] text-[#E4E4E4] font-semibold pt-[5px] flex justify-center">
        <h1>
          {firstName}&nbsp;&nbsp;{lastName}
        </h1>
      </div>

      <ul>
        {Links.map((link) => (
          <li key={link.name}>
            <button className="w-full border-b-[2px] border-[#283943] text-left pb-[5px] my-[10px]">
              <table>
                <tbody>
                  <tr>
                    <td rowSpan={2}>
                      <div className="w-[32px] h-[32px] rounded-[12px] bg-[#283943] mr-[15px] flex justify-center items-center text-[18px]">
                        {link.img}
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
