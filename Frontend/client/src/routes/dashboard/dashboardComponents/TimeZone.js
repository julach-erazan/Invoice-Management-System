import React, { useState, useEffect } from "react";
const setTime = require("../../../controller/setTime");

const TimeZone = () => {
  const [currentTime, setCurrentTime] = useState(setTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(setTime());
    }, 1000);

    return () => clearInterval(intervalId);
  },[]);

  if(currentTime.hours > 12){
    currentTime.hours = currentTime.hours - 12;
  }
  return (
    <div className="w-full h-[15px] text-[12px] flex justify-left items-center font-semibold">
        <h1>{currentTime.hours < 10 ? "0" + currentTime.hours : currentTime.hours}</h1>
        <h1>&nbsp;:&nbsp;</h1>
        <h1>{currentTime.minuite < 10 ? "0" + currentTime.minuite : currentTime.minuite}</h1>
        <h1>&nbsp;{currentTime.hours < 12 ? "AM" : "PM"}</h1>

        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{currentTime.day}&nbsp;</h1>
        <h1>{currentTime.month}&nbsp;</h1>
        <h1>{currentTime.year}</h1>
    </div>
  );
};

export default TimeZone;
