import React from "react";
import { Link } from "react-router-dom";

const LoginUser = () => {
  return (
    <div className="w-[45vw] min-w-[350px] flex flex-col justify-center items-center text-white py-[20px]">
      <h1 className="text-center text-[30px] font-black">WELCOME</h1>
      <h2 className="text-center text-[20px]">Login to Dashboard</h2>

      <form
        action=""
        className="w-full text-[15px] flex flex-col justify-evenly items-center text-black mt-[40px]"
      >
        <input
          className="w-[80%] h-[30px] lg:w-[60%] rounded-[15px] p-[20px] mb-[20px]"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-[80%] h-[30px] lg:w-[60%] rounded-[15px] p-[20px] mb-[40px]"
          type="password"
          placeholder="Password"
        />

        <button className="w-[40%] h-[40px] text-white font-black rounded-[15px] bg-[#8499f8]">
          LOGIN
        </button>
      </form>

      <h3 className="text-center text-[15px] mt-[40px]">
        Dont have an account?{" "}
        <Link className="text-[#8499f8] font-black" to="/SignUp">
          Sign Up
        </Link>
      </h3>
    </div>
  );
};

export default LoginUser;
