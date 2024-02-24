import React from "react";
import Header from "./Header";

const TitleSection = () => {
  return (
    <div className="w-[45vw] min-w-[350px] h-[100px] lg:h-[50vh] flex justify-bethween items-center text-white">
      <Header />

      <section className="text-[20px] lg:text-[40px] pl-[20px] lg:pl-[50px] font-RubikRegular font-semibold">
        <h1>INVENTORY</h1>
        <h1>MANAGEMENT</h1>
        <h1>SYSTEM</h1>
      </section>
    </div>
  );
};

export default TitleSection;
