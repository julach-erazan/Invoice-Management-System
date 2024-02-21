import React from "react";
import Home from "./routes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUser from "./routes/user/LoginUser";
import SignUpUser from "./routes/user/SignUpUser";

function App() {
  return (
    <div className="main font-zenmarugothic-regular">
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/Signup" element={<SignUpUser />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
