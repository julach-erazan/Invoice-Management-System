import './App.css'
import React from "react";
import Home from "./routes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpUser from "./routes/user/SignUpUser";
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  return (
    <div className="main font-RobotoRegular">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUpUser />}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
