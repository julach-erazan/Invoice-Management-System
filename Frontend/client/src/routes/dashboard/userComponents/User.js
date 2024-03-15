import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8000/getusers")
        .then((res) => {
            setUsers(res.data);
        });
    } catch (error) {
      return;
    }
  }, []);

  return (
    <div className="w-full h-full lg:h-[90%] flex justify-center items-center">
        <ul>
            {
                users.map(user => {
                    return (
                        <div>
                            <h1>First Name: {user.firstName}</h1>
                            <h1>Last Name: {user.lastName}</h1>
                        </div>
                    )
                })
            }
        </ul>
    </div>
  );
};

export default User;
