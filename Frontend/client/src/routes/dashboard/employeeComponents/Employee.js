import React from "react";
import { useState } from "react";
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";
import UpdateEmployee from "./UpdateEmployee";
import { handleDeleteEmployee } from "../../../controller/handleDeleteEmployee";

const Employee = () => {
  const [_viewEmployee, setViewEmployee] = useState(true);
  const [_addEmployee, setAddEmployee] = useState(false);
  const [_updateEmployee, setUpdateEmployee] = useState(false);
  const [employee, setEmployee] = useState({
    id: "",
    empId: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  //View Add Employee Details
  const viewAddEmployee = () => {
    setAddEmployee(true);
    setViewEmployee(false);
  };

  //View Update Employee
  const updateEmployee = (
    id,
    empId,
    firstName,
    lastName,
    phoneNumber,
    email,
    address
  ) => {
    setUpdateEmployee(true);
    setViewEmployee(false);

    setEmployee({
      ...employee,
      id: id,
      empId: empId,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      address: address,
    });
  };

  //Close Button
  const close = () => {
    setViewEmployee(true);
    setAddEmployee(false);
    setUpdateEmployee(false);
  };

  //Delete Employee
  const deleteEmployee = (id) => {
    handleDeleteEmployee(id)
  }

  return (
    <div className="w-full h-full lg:h-[90%] flex flex-col items-center overflow-y-scroll">
      {_viewEmployee ? (
        <ViewEmployee
          onViewAddEmployee={viewAddEmployee}
          onUpdateEmployee={updateEmployee}
          onDeleteEmployee = {deleteEmployee}
        />
      ) : (
        ""
      )}
      <div className="h-full flex items-center">
        {_addEmployee ? <AddEmployee onClose={close}/> : ""}
        {_updateEmployee ? <UpdateEmployee employee = {employee} onClose={close}/> : ""}
      </div>
    </div>
  );
};

export default Employee;
