import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './dashboardComponents/Navbar';
import Profile from './dashboardComponents/Profile';
import ProfileSetting from './dashboardComponents/ProfileSetting';
import Setting from './dashboardComponents/Setting';
import ShopSetting from './dashboardComponents/ShopSetting';

const Dashboard = () => {

  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState("FName");
  const [lastName, setLastName] = useState("LName");
  const [phoneNumber, setPhoneName] = useState("Phone");

  const [viewProf, setViewProf] = useState(false);
  const [viewSet, setViewSet] = useState(false);
  const [viewProfileSet, setViewProfileSet] = useState(false);

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

  //View Profile Section
  const viewProfile = () => {
    setViewProf(!viewProf);
    if(viewSet === true){
      setViewSet(false);
    }
  }

  //View Setting Section
  const viewSetting = () => {
    setViewSet(!viewSet);
    if(viewProf === true){
      setViewProf(false);
    }
  }

  const dataObj = {firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber}

  return (
    <div className='w-screen h-screen p-[10px] bg-[#141E22] text-[#fff] font-RubikRegular'>
      <Navbar {...dataObj} onViewProfile={viewProfile} onViewSetting={viewSetting}/>
      {viewProf ? <Profile {...dataObj}/> : "" }
      {viewSet ? <Setting/> : ""}
      {viewProfileSet ? <ProfileSetting /> : ""}
      <ShopSetting/>
      {/* <ProfileSetting/> */}
    </div>
  )
}

export default Dashboard;
