import React from "react";

const UpdateProfileInfo = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-[14px] text-[#AEB0AF]">
        Update Your Profile Details
      </h2>
      <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
        General Information
      </h1>

      <div className="flex flex-col mt-[30px]">
        <label htmlFor="phoneNumber">
          <h1 className="text-[14px]">Firstname</h1>
        </label>
        <input
          id="phoneNumber"
          className="w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px]"
          type="text"
        />

        <label htmlFor="phoneNumber">
          <h1 className="text-[14px]">Lastname</h1>
        </label>
        <input
          id="phoneNumber"
          className="w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px]"
          type="text"
        />

        <label htmlFor="phoneNumber">
          <h1 className="text-[14px]">Email</h1>
        </label>
        <input
          id="phoneNumber"
          className="w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px]"
          type="text"
        />

        <label htmlFor="phoneNumber">
          <h1 className="text-[14px]">Phone number</h1>
        </label>
        <input
          id="phoneNumber"
          className="w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px]"
          type="text"
        />

        <button
          className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[10px]"
          type="submit"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileInfo;
