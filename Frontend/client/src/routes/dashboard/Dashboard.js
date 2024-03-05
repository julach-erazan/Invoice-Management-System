import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './dashboardComponents/Navbar';
import Profile from './dashboardComponents/Profile';

const Dashboard = () => {

  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState("FName");
  const [lastName, setLastName] = useState("LName");
  const [phoneNumber, setPhoneName] = useState("Phone");

  useEffect(() => {
    setEmail(localStorage.getItem("email"))
  }, [])

  axios.post("http://localhost:8000/dashboard",{
    email
  }).then((res) => {
    setFirstName(res.data.firstName);
    setLastName(res.data.lastName);
    setPhoneName(res.data.phoneNumber);
  })
  .catch(err => {
    return;
  });

  const dataObj = {firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber}

  return (
    <div className='w-screen h-screen p-[10px] bg-[#141E22] text-[#fff]'>
      <Navbar {...dataObj}/>
      <Profile {...dataObj}/>
    </div>
  )
}

export default Dashboard
