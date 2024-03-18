import { React, useState, useRef } from "react";
import { shopRegisterSchema } from "../../../schemas/shopRegisterSchema";
import { useFormik } from "formik";
import { shopRegSubmit } from "../../../controller/formShopRegister";

const ShopRegister = () => {
  const [image, setImage] = useState(null);
  const inputImage = useRef(null);

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    inputImage.current.value = ""; //Clear image input field

    shopRegSubmit(
      value.shopName,
      image,
      value.shopRegistationNumber,
      value.email,
      value.phoneNumber,
      value.address,
      );
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
    setFieldValue('logoPath', e.target.files[0]);
  };

  const { values, handleBlur, errors, touched, setFieldValue, handleChange, handleSubmit } =
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
    <div className="h-[440px] overflow-y-scroll flex flex-col items-center p-[10px]">
      <h2 className="text-[14px] text-[#AEB0AF]">Add Shop Details</h2>
      <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
        General Information
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col"
        autoComplete="off"
        action="POST"
      >
        <label htmlFor="shopName">
          <h1 className="text-[14px]">Shop Name</h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[8px] p-[10px] my-[10px]
            ${errors.shopName && touched.shopName ? "input-error" : ""}
          `}
          id="shopName"
          type="text"
          value={values.shopName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.shopName && touched.shopName && (
          <p className="error">{errors.shopName}</p>
        )}

        <label htmlFor="logoPath">
          <h1 className="text-[14px]">Logo</h1>
        </label>
        <input
          id="logoPath"
          name='logoPath'
          type="file"
          className={`w-full h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[2px] mb-[10px]
          ${
            errors.logoPath && touched.logoPath
              ? "input-error"
              : ""
          }`}
          accept="image/*"
          onChange={handleUpload}
          ref={inputImage}
        />
        {errors.logoPath && touched.logoPath && (
          <p className="error">{errors.logoPath}</p>
        )}

        <label htmlFor="shopRegistationNumber">
          <h1 className="text-[14px]">Registation Number</h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[8px] p-[10px] my-[10px]
            ${
              errors.shopRegistationNumber && touched.shopRegistationNumber
                ? "input-error"
                : ""
            }
          `}
          id="shopRegistationNumber"
          type="text"
          value={values.shopRegistationNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.shopRegistationNumber && touched.shopRegistationNumber && (
          <p className="error">{errors.shopRegistationNumber}</p>
        )}

        <label htmlFor="email">
          <h1 className="text-[14px]">Email</h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[8px] p-[10px] my-[10px]
            ${errors.email && touched.email ? "input-error" : ""}
          `}
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="phoneNumber">
          <h1 className="text-[14px]">Phone Number</h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[8px] p-[10px] my-[10px]
            ${errors.phoneNumber && touched.phoneNumber ? "input-error" : ""}
          `}
          id="phoneNumber"
          type="text"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <p className="error">{errors.phoneNumber}</p>
        )}

        <label htmlFor="address">
          <h1 className="text-[14px]">Address</h1>
        </label>
        <textarea
          className={`
          w-full h-[70px] rounded-[8px] p-[10px] my-[10px]
            ${errors.address && touched.address ? "input-error" : ""}
          `}
          id="address"
          type="text"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address && touched.address && (
          <p className="error">{errors.address}</p>
        )}

        <button
          className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[10px]"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ShopRegister;
