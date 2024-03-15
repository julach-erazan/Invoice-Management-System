import axios from "axios";
import { React, useState } from "react";
import { FaFolderPlus } from "react-icons/fa6";

const UpdateProfilePic = () => {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("/Images/blankProfile.png");

  function handleChange(e) {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", localStorage.getItem("id"));
      formData.append("profileImagePath", image);

      const response = await axios.post(
        "http://localhost:8000/updateprofilepicture", formData);
      if (response.status === 201) {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response?.data.message);
    }
    setPreviewImage("/Images/blankProfile.png");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-[14px] text-[#AEB0AF]">Add Your Profile Picture</h2>
      <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
        Profile Picture
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-[150px] h-[150px] border-[#283943] my-[40px]">
          <img
            src={previewImage}
            alt="Profile"
            className="w-[150px] h-[150px]"
          />
        </div>

        <form className="flex" action="POST" onSubmit={handleSubmit}>
          <label
            htmlFor="profilePic"
            className="w-[120px] h-[36px] cursor-pointer flex justify-evenly items-center text-[#141E22] font-semibold rounded-[13px] bg-[#39db7d] mt-[10px] mr-[10px]"
          >
            <FaFolderPlus /> Change
          </label>

          <input
            id="profilePic"
            type="file"
            onChange={handleChange}
            accept="image/*"
            hidden
          />

          <button
            className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[10px] ml-[10px]"
            type="submit"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePic;
