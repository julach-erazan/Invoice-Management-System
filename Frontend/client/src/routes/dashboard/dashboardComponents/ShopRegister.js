import { React } from "react";
import { useFormik } from "formik";
import { shopRegisterSchema } from "../schemas/shopRegisterSchema";
import { shopRegSubmit } from "../../../controller/formShopRegister";
import { useState } from "react";

const ShopRegister = () => {
  const [logoPath, setoLgoPath] = useState();

  const path = new FormData();
  path.append('logoPath', logoPath)

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    shopRegSubmit(
      value.shopName,
      path,
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
    <div className="w-[300px] md:w-[500px] bg-[#1A262D] rounded-[15px] flex flex-col items-center p-[10px] px-[20px] mt-[20px]">
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
          <h1 className="text-[14px]">Shop name</h1>
        </label>
        <input
          id="shopName"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.shopName && touched.shopName ? "input-error" : ""
          }`}
          type="text"
          placeholder="Example Stores"
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
          type="file"
          id="logoPath"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.logoPath && touched.logoPath ? "input-error" : ""
          }`}
          accept="image/*"
          onChange={e => setoLgoPath(e.target.files[0])}
          onBlur={handleBlur}
        />
        {errors.logoPath && touched.logoPath && (
          <p className="error">{errors.logoPath}</p>
        )}

        <label htmlFor="shopRegistationNumber">
          <h1 className="text-[14px]">Registation number</h1>
        </label>
        <input
          id="shopRegistationNumber"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.shopRegistationNumber && touched.shopRegistationNumber
              ? "input-error"
              : ""
          }`}
          type="text"
          placeholder="10/example/001"
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
          id="email"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.email && touched.email ? "input-error" : ""
          }`}
          type="email"
          placeholder="example@mail.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="phoneNumber">
          <h1 className="text-[14px]">Phone number</h1>
        </label>
        <input
          id="phoneNumber"
          className={`w-full min-w-[260px] h-[30px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.phoneNumber && touched.phoneNumber ? "input-error" : ""
          }`}
          type="text"
          placeholder="999-999-9999"
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
          id="address"
          className={`w-full min-w-[260px] h-[60px] rounded-[8px] text-[13px] placeholder:text-[13px] px-[10px] py-[5px] mb-[10px] ${
            errors.address && touched.address ? "input-error" : ""
          }`}
          type="text"
          placeholder=""
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShopRegister;
