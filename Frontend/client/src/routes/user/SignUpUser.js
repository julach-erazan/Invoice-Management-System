import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import TitleSection from "../home/homeComponents/TitleSection";
import { validateInputs } from "../../controller/validateInputs";

const SignUpUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef()

  const handleSubmit = (e) => {

    e.preventDefault();

    //Validate User Inputs
    validateInputs(
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,

      firstNameRef,
      lastNameRef,
      phoneNumberRef,
      emailRef,
      passwordRef,
      confPasswordRef
    );
  };

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
          action="POST"
          className="w-full text-[15px] flex flex-col justify-evenly items-center text-black mt-[20px]"
        >
          <div className="w-[80%] lg:w-[60%] lg:flex-col flex justify-between">
            <input
              className="w-[45%] lg:w-[100%] h-[30px] rounded-[15px] p-[18px] mb-[20px]"
              type="text"
              placeholder="Firstname"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              ref = { firstNameRef }
            />
            <input
              className="w-[45%] lg:w-[100%] h-[30px] rounded-[15px] p-[18px] mb-[20px]"
              type="text"
              placeholder="Lastname"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              ref = { lastNameRef }
            />
          </div>

          <div className="w-[80%] lg:w-[60%] lg:flex-col flex justify-between">
            <input
              className="w-[45%] h-[30px] lg:w-[100%] rounded-[15px] p-[18px] mb-[20px]"
              type="text"
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              ref = { phoneNumberRef }
            />

            <input
              className="w-[45%] h-[30px] lg:w-[100%] rounded-[15px] p-[18px] mb-[20px]"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              ref = { emailRef }
            />
          </div>

          <div className="w-[80%] lg:w-[60%] lg:flex-col flex justify-between">
            <input
              className="w-[45%] h-[30px] lg:w-[100%] rounded-[15px] p-[18px] mb-[20px]"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              ref = { passwordRef }
            />

            <input
              className="w-[45%] h-[30px] lg:w-[100%] rounded-[15px] p-[18px] mb-[20px]"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              ref = { confPasswordRef }
            />
          </div>

          <button
            className="w-[40%] h-[40px] text-white font-black rounded-[15px] bg-[#01579B]"
            onClick={handleSubmit}
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
