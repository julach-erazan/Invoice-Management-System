import { React } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import TitleSection from "../home/homeComponents/TitleSection";
import { formSchema } from "./schemas/registerFormSchema";
import { formSubmit } from "../../controller/formRegister";

const SignUpUser = () => {

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    formSubmit(
      value.firstName,
      value.lastName,
      value.phoneNumber,
      value.email,
      value.password
    );
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: formSchema,
      onSubmit,
    });

  return (
    <div className="w-screen min-w-[500px] h-screen min-h-[600px] flex flex-col lg:flex-row justify-evenly items-center bg-[#0F171A]">
      <TitleSection />
      <hr className="w-[80vw] min-w-[400px] h-[3px] lg:w-[3px] lg:min-w-[3px] lg:h-[80vh] bg-[#2E414D] border-none" />

      <div className="w-[45vw] min-w-[500px] h-[420px] lg:h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-center text-[30px] font-RubikRegular font-semibold">
          WELCOME
        </h1>
        <h2 className="text-center text-[20px] font-RubikRegular">
          Create Your Account
        </h2>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          action="POST"
          className="w-full text-[15px] flex flex-col justify-evenly items-center text-black mt-[20px]"
        >
          <div className="w-[80%] lg:w-[60%] lg:flex-col flex justify-between">
            <div className="w-[45%] lg:w-full flex flex-col">
              <input
                id="firstName"
                className={`
                     h-[30px] rounded-[15px] p-[18px] mb-[10px]
                    ${
                      errors.firstName && touched.firstName ? "input-error" : ""
                    }
                  `}
                type="text"
                placeholder="Firstname"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>
            <div className="w-[45%] lg:w-[100%]  flex flex-col">
              <input
                id="lastName"
                className={`
                h-[30px] rounded-[15px] p-[18px] mb-[10px] lg:my-[10px] 
                ${errors.lastName && touched.lastName ? "input-error" : ""}
              `}
                type="text"
                placeholder="Lastname"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="w-[80%] lg:w-[60%] lg:flex-col flex justify-between">
            <div className="w-[45%] lg:w-[100%]  flex flex-col">
              <input
                id="phoneNumber"
                className={`
                  h-[30px] rounded-[15px] p-[18px] my-[10px]
                  ${
                    errors.phoneNumber && touched.phoneNumber
                      ? "input-error"
                      : ""
                  }
                `}
                type="text"
                placeholder="Phone number"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p className="error">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="w-[45%] lg:w-[100%]  flex flex-col">
              <input
                id="email"
                className={`
                  h-[30px] rounded-[15px] p-[18px] my-[10px]
                  ${errors.email && touched.email ? "input-error" : ""}
                `}
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="w-[80%] lg:w-[60%] lg:flex-col flex justify-between">
            <div className="w-[45%] lg:w-[100%]  flex flex-col">
              <input
                id="password"
                className={`
                  h-[30px] rounded-[15px] p-[18px] my-[10px]
                  ${errors.password && touched.password ? "input-error" : ""}
                `}
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>

            <div className="w-[45%] lg:w-[100%]  flex flex-col">
              <input
                id="confirmPassword"
                className={`
                h-[30px] rounded-[15px] p-[18px] my-[10px]
                ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : ""
                }
              `}
                type="password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <button
            className="w-[40%] h-[40px] text-white font-black rounded-[15px] bg-[#01579B] mt-[10px]"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <h3 className="text-center text-[15px] mt-[20px]">
          Already have an account?{" "}
          <Link className="text-[#01579B] font-black" to="/">
            Login
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignUpUser;
