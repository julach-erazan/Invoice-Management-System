import React from 'react'

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  } 

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={ handleLogout }>Logout</button>
    </div>
  )
}

export default Dashboard
