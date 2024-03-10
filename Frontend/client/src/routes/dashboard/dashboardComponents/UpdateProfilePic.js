import { React, useState } from "react";
import { FaFolderPlus } from "react-icons/fa6";

const UpdateProfilePic = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-[14px] text-[#AEB0AF]">Add Your Profile Picture</h2>
      <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
        Profile Picture
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-[150px] h-[150px] border-[#283943] my-[40px]">
          <img src={file} className="w-[150px] h-[150px]" />
        </div>

        <div className="flex">
          <label
            htmlFor="profilePic"
            className="w-[120px] h-[36px] flex justify-evenly items-center text-black font-semibold rounded-[13px] bg-[#39db7d] mt-[10px] mr-[10px]"
          >
            <FaFolderPlus /> Change
          </label>

          <input id="profilePic" type="file" onChange={handleChange} hidden />

          <button
            className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[10px] ml-[10px]"
            type="submit"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePic;
