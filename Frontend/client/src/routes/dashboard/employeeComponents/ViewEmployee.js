import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";

const ViewEmployee = ({ onUpdateEmployee, onViewAddEmployee, onDeleteEmployee }) => {
  const [users, setUsers] = useState([]);
  const userId = sessionStorage.getItem("id");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .post("http://localhost:8000/getemployee", { userId })
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.response?.data.message);
        });
    } catch (error) {
      alert(error.response?.data.message);
    }
  };
  return (
    <div className="w-full mt-[15px] text-[#5B6271]">
      <div className="w-full h-[50px] flex justify-end items-center mb-[10px]">
      <button
        className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] flex justify-evenly items-center text-[#E4E4E4]"
        onClick={() => onViewAddEmployee()}
      >
        <IoPersonAdd className="text-[16px]"/> Add User
      </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#283943] text-[15px] text-[#AEB0AF]">
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Emp Id</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">First Name</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Last Name</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Date of Birth</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Gender</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Phone Number</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Email</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Address</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Status</h1>
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                <h1 className="font-semibold">Actions</h1>
              </th>
            </tr>
          </thead>
          <tbody className="text-[#E4E4E4]">
            {users.map((employee) => (
              <tr key={employee._id} className ="border-b-[2px] border-[#283943]">
                <td className="px-6 py-4 whitespace-wrap">
                  {employee.empId}
                </td>
                <td className="px-6 py-4 whitespace-wrap">
                  {employee.firstName}
                </td>
                <td className="px-6 py-4 whitespace-wrap">
                  {employee.lastName}
                </td>
                <td className="px-6 py-4 whitespace-wrap">{employee.dob}</td>
                <td className="px-6 py-4 whitespace-wrap">
                  {employee.gender}
                </td>
                <td className="px-6 py-4 whitespace-wrap">
                  {"0" + employee.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-wrap">
                  {employee.email}
                </td>
                <td className="px-6 py-4 whitespace-wrap">
                  {employee.address}
                </td>
                <td className="px-6 py-4 whitespace-wrap">
                  {employee.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-evenly items-center">
                <button 
                  className="w-[45px] h-[45px] rounded-[5px] flex justify-center items-center text-[#39DB7D] text-[20px]"
                  onClick={() => onUpdateEmployee(employee._id,employee.empId,employee.firstName,employee.lastName, employee.phoneNumber, employee.email, employee.address)}
                >
                  <FaUserEdit/>
                </button>

                <button 
                  className="w-[45px] h-[45px] rounded-[5px] flex justify-center items-center text-[#d11a2a] text-[25px]"
                  onClick={() => onDeleteEmployee(employee._id)}
                >
                  <MdDeleteForever/>
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewEmployee;
