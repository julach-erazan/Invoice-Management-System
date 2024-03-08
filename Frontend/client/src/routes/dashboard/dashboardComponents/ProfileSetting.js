import { React } from "react";
import { useFormik } from "formik";
import { shopRegisterSchema } from "../schemas/shopRegisterSchema";
import { shopRegSubmit } from "../../../controller/formShopRegister";

const ProfileSetting = () => {
  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    shopRegSubmit(
      value.shopName,
      // value.logoPath,
      value.shopRegistationNumber,
      value.email,
      value.phoneNumber,
      value.address
    );
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        shopName: "",
        logoPath: "",
        shopRegistationNumber: "",
        email: "",
        phoneNumber: "",
        address: "",
      },
      validationSchema: shopRegisterSchema,
      onSubmit,
    });

  return (
    <div className="w-full  flex flex-col items-center ">
      <h2 className="text-[14px] text-[#AEB0AF]">Update Your Profile</h2>
      <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
        Profile Information
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-[300px] md:w-[500px] flex flex-col bg-[#1A262D] rounded-[15px] p-[10px] px-[20px] mt-[20px]"
        autoComplete="off"
        action="POST"
      >
        <label htmlFor="shopName">
          <h1 className="text-[14px]">First name</h1>
        </label>
        <input
          id="shopName"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.shopName && touched.shopName ? "input-error" : ""
          }`}
          type="text"
          placeholder=""
          value={values.shopName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.shopName && touched.shopName && (
          <p className="error">{errors.shopName}</p>
        )}

        <label htmlFor="shopName">
          <h1 className="text-[14px]">Last name</h1>
        </label>
        <input
          id="shopName"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.shopName && touched.shopName ? "input-error" : ""
          }`}
          type="text"
          placeholder=""
          value={values.shopName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.shopName && touched.shopName && (
          <p className="error">{errors.shopName}</p>
        )}

        <label htmlFor="logoPath">
          <h1 className="text-[14px]">Email</h1>
        </label>
        <input
          type="text"
          id="logoPath"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.logoPath && touched.logoPath ? "input-error" : ""
          }`}
          value={values.logoPath}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.logoPath && touched.logoPath && (
          <p className="error">{errors.logoPath}</p>
        )}

        <label htmlFor="shopRegistationNumber">
          <h1 className="text-[14px]">Phone number</h1>
        </label>
        <input
          id="shopRegistationNumber"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.shopRegistationNumber && touched.shopRegistationNumber
              ? "input-error"
              : ""
          }`}
          type="text"
          placeholder=""
          value={values.shopRegistationNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.shopRegistationNumber && touched.shopRegistationNumber && (
          <p className="error">{errors.shopRegistationNumber}</p>
        )}

        <label htmlFor="email">
          <h1 className="text-[14px]">Old Password</h1>
        </label>
        <input
          id="email"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.email && touched.email ? "input-error" : ""
          }`}
          type="email"
          placeholder=""
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="phoneNumber">
          <h1 className="text-[14px]">New Password</h1>
        </label>
        <input
          id="phoneNumber"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.phoneNumber && touched.phoneNumber ? "input-error" : ""
          }`}
          type="text"
          placeholder=""
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <p className="error">{errors.phoneNumber}</p>
        )}

        <button
          className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[10px]"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileSetting;
