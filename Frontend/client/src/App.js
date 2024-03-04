import "./App.css";
import React from "react";
import Home from "./routes/home/Home";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./routes/dashboard/Dashboard";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    setAccessToken(localStorage.getItem("token"));
  }, []);

  return (
    <div className="main font-RobotoRegular">
      <BrowserRouter>
        {accessToken?<Dashboard/>:<Home/>}
      </BrowserRouter>
    </div>
  );
}

export default App;
