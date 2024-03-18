import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import AddUser from "./AddEmployee";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:8000/getusers").then((res) => {
        setUsers(res.data);
      });
    } catch (error) {
      return;
    }
  }, []);

  return (
    <div className="w-full h-full lg:h-[90%] flex justify-center items-center">
      <div className="w-[90%] min-w-[310px] md:w-[500px] h-[500px] bg-[#1A262D] rounded-[15px] p-[10px] ">
        {/* <ul>
          {users.map((user) => {
            return (
              <div>
                <h1>First Name: {user.firstName}</h1>
                <h1>Last Name: {user.lastName}</h1>
              </div>
            );
          })}
        </ul> */}
        <AddUser/>
      </div>
    </div>
  );
};

export default User;
