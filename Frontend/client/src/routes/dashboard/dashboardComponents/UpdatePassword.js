import axios from "axios";
import React from "react";
import { useFormik } from "formik";
import { updatePasswordSchema } from "../../../schemas/updatePasswordSchema";

const UpdatePassword = () => {
  const onSubmit = async (value, actions) => {
    actions.resetForm(); //Reset form data

    const id = sessionStorage.getItem("id");
    const oldPassword = value.oldPassword;
    const newPassword = value.newPassword;

    try {
      await axios
        .post("http://localhost:8000/updatepassword", {
          id,
          oldPassword,
          newPassword,
        })
        .then((res) => {
          alert(res.data.message);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("id");
          window.location = "/";
        });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert(error.response.data.message);
      }
    }
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      validationSchema: updatePasswordSchema,
      onSubmit,
    });

  return (
    <div className="w-full flex flex-col items-center px-[20px]">
      <h2 className="text-[14px] text-[#AEB0AF]">Update Your Password</h2>
      <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
        Change Password
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col mt-[20px]"
        autoComplete="off"
        action="POST"
      >
        <label htmlFor="oldPassword">
          <h1 className="text-[14px]">Old Password</h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[8px] p-[10px] my-[10px]
            ${errors.oldPassword && touched.oldPassword ? "input-error" : ""}
          `}
          id="oldPassword"
          type="password"
          value={values.oldPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.oldPassword && touched.oldPassword && (
          <p className="error">{errors.oldPassword}</p>
        )}

        <label htmlFor="newPassword">
          <h1 className="text-[14px]">New Password</h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[8px] p-[10px] my-[10px]
            ${errors.newPassword && touched.newPassword ? "input-error" : ""}
          `}
          id="newPassword"
          type="password"
          value={values.newPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.newPassword && touched.newPassword && (
          <p className="error">{errors.newPassword}</p>
        )}

        <label htmlFor="confirmPassword">
          <h1 className="text-[14px]">Confirm Password</h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[8px] p-[10px] my-[10px]
            ${
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
          `}
          id="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button
          className="w-[170px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[30px]"
          type="submit"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
