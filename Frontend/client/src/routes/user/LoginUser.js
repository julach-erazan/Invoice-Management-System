import { React } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginFormSchema } from "./schemas/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { formLogin } from "../../controller/formLogin";

const LoginUser = () => {
  const navigate = useNavigate();

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    formLogin(
      value.email,
      value.password
    );
    navigate('/dashboard')
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginFormSchema,
      onSubmit,
    });

  return (
    <div className="w-[45vw] min-w-[400px] h-[400px] flex flex-col justify-center items-center text-white">
      <h1 className="text-center text-[30px] font-RubikRegular font-semibold">
        WELCOME
      </h1>
      <h2 className="text-center text-[20px] font-RubikRegular">
        Login to Dashboard
      </h2>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          action="POST"
          className="w-full text-[15px] flex flex-col justify-evenly items-center text-black mt-[20px]"
        >
          <div className="w-[80%] lg:w-[60%] flex flex-col justify-center items-center">
            <input
                id="email"
                className={`
                w-full h-[30px] rounded-[15px] p-[18px] my-[10px]
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
          
            <input
                id="password"
                className={`
                w-full h-[30px] rounded-[15px] p-[18px] my-[10px]
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

          <button
            className="w-[40%] h-[40px] text-white font-black rounded-[15px] bg-[#01579B] mt-[30px]"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <h3 className="text-center text-[15px] mt-[20px]">
          Already have an account?{" "}
          <Link className="text-[#01579B] font-black" to="/signup">
            Signup
          </Link>
        </h3>
    </div>
  );
};

export default LoginUser;
