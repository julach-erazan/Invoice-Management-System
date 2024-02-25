import { useState } from "react";
import { React, useRef } from "react";
import { Link } from "react-router-dom";
import {
  setSuccess,
  setError,
  validateMailFormat,
  validatePhoneNumberFormat,
  validatePasswordFormat,
} from "../../controller/validateInputs";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email == "") {
      //email validation
      setError(emailRef, "Email");
    } else {
      if (validateMailFormat(emailRef)) {
        setSuccess(emailRef);
      } else {
        setError(emailRef, "Email");
      }
    }

    if (password == "") {
      //password validation
      setError(passwordRef, "Password");
    } else {
      setSuccess(passwordRef);
      if (validatePasswordFormat(passwordRef)) {
        setSuccess(passwordRef);
      } else {
        setError(passwordRef, "Password");
      }
    }
  };

  return (
    <div className="w-[45vw] min-w-[400px] h-[400px] flex flex-col justify-center items-center text-white">
      <h1 className="text-center text-[30px] font-RubikRegular font-semibold">
        WELCOME
      </h1>
      <h2 className="text-center text-[20px] font-RubikRegular">
        Login to Dashboard
      </h2>

      <form
        action=""
        className="w-full text-[15px] flex flex-col justify-evenly items-center text-black mt-[40px]"
      >
        <input
          className="w-[80%] h-[30px] lg:w-[60%] rounded-[15px] p-[18px] mb-[20px]"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          ref={emailRef}
        />
        <input
          className="w-[80%] h-[30px] lg:w-[60%] rounded-[15px] p-[18px] mb-[40px]"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          ref={passwordRef}
        />

        <button
          className="w-[40%] h-[40px] text-white font-black rounded-[15px] bg-[#01579B]"
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </form>

      <h3 className="text-center text-[15px] mt-[40px]">
        Dont have an account?{" "}
        <Link className="text-[#01579B] font-black" to="/SignUp">
          Sign Up
        </Link>
      </h3>
    </div>
  );
};

export default LoginUser;
