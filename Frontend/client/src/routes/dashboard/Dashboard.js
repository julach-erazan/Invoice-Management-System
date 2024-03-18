import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './dashboardComponents/Navbar';
import Profile from './dashboardComponents/Profile';
import ProfileSetting from './dashboardComponents/ProfileSetting';
import Setting from './dashboardComponents/Setting';
import ShopSetting from './dashboardComponents/ShopSetting';
import User from './userComponents/User';

const Dashboard = () => {

  const [id, setId] = useState()
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState("FName");
  const [lastName, setLastName] = useState("LName");
  const [phoneNumber, setPhoneName] = useState("Phone");

  const [viewProf, setViewProf] = useState(false);
  const [viewSet, setViewSet] = useState(false);
  const [_viewProfileSet, setViewProfileSet] = useState(false);
  const [_viewShopSet, setViewShopSet] = useState(false);

  const [_viewDashboard, setViewDashboard] = useState(true);
  const [_viewUser, setViewUser] = useState(false);

  useEffect(() => {
    setEmail(sessionStorage.getItem("email"));
    setId(sessionStorage.getItem("id"))
  }, [])

  axios.post("http://localhost:8000/dashboard",{
    id,
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

  //View Profile Update Section
  const viewProfileSet = () =>{
    setViewProfileSet(!_viewProfileSet);
    setViewSet(false);
    setViewShopSet(false);

    setViewDashboard(false);
    setViewUser(false);
  }

  //View Shop Information Update Section
  const viewShopSet = () =>{
    setViewShopSet(!_viewShopSet);
    setViewSet(false);
    setViewProfileSet(false);

    setViewDashboard(false);
    setViewUser(false);
  }

  //Close Button
  const close = () =>{
    setViewSet(false);
    setViewProfileSet(false);
    setViewShopSet(false);

    setViewDashboard(true);
    setViewUser(false);
  }

  //View Dashboard Section
  const viewDashboard = () => {
    setViewSet(false);
    setViewProfileSet(false);
    setViewShopSet(false);

    setViewDashboard(true);
    setViewUser(false);
  }

  //View Users Section
  const viewUser = () => {
    setViewSet(false);
    setViewProfileSet(false);
    setViewShopSet(false);

    setViewDashboard(false);
    setViewUser(true);
  }

  const dataObj = {id: id, firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber}

  return (
    <div className='w-screen min-w-[650px] h-screen p-[10px] text-[#fff] font-RubikRegular'>
      <Navbar 
        {...dataObj} 
        onViewProfile={viewProfile} 
        onViewSetting={viewSetting}

        onViewDashboard = {viewDashboard}
        onViewUser = {viewUser}
      />

      {viewProf ? <Profile {...dataObj}/> : "" }
      {viewSet ? <Setting onViewProfileSet = {viewProfileSet} onViewShopSet = {viewShopSet}/> : ""}
      {_viewProfileSet ? <ProfileSetting onClose = {close}/> : ""}
      {_viewShopSet ? <ShopSetting onClose = {close}/> : ""}

      {_viewDashboard ? 
        <div className="w-full h-full lg:h-[90%] flex justify-center items-center">
          Hello
        </div>
      : ""}
      {_viewUser ? <User/>: ""}
    </div>
  )
}

export default Dashboard;
