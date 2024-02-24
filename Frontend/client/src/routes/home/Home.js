import React from "react";
import LoginUser from "../user/LoginUser";
import TitleSection from "./homeComponents/TitleSection";

const Home = () => {
  return (
    <div className="w-screen min-w-[400px] h-screen min-h-[600px] flex flex-col lg:flex-row justify-evenly items-center bg-[#0F171A]">
      <TitleSection />
      <hr className="w-[80vw] min-w-[370px] h-[3px] lg:w-[3px] lg:min-w-[3px] lg:h-[80vh] bg-[#2E414D] border-none" />
      <LoginUser />
    </div>
  );
};

export default Home;
