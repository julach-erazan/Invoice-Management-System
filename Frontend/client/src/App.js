import React from "react";
import Home from "./routes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpUser from "./routes/user/SignUpUser";

function App() {
  return (
    <div className="main font-RobotoRegular">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/Signup" element={<SignUpUser />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
