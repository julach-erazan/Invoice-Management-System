import React from "react";

const OptionsNav = ({ onHandleClose }) => {
  return (
    <div className="w-[200px] h-full bg-[red]">
      <button
        onClick={() => onHandleClose()}
      >Close</button>
    </div>
  );
};

export default OptionsNav;
