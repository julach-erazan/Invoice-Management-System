import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './dashboardComponents/Navbar';

const Dashboard = () => {

  const [email, setEmail] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    setEmail(localStorage.getItem("email"))
  }, [])

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location = "/";
  }

  axios.post("http://localhost:8000/dashboard",{
    email
  }).then((res) => {
    setName(res.data.name);
  })
  .catch(err => {
    return;
  });

  return (
    <div className='p-[10px]'>
      <Navbar/>
      <h1>Hello {name} Welcome to the Dashboard</h1>
      <button onClick={ handleLogout }>Logout</button>
    </div>
  )
}

export default Dashboard
