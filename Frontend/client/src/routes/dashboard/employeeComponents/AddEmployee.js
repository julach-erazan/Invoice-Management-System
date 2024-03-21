import { React } from "react";
import { useFormik } from "formik";
import { addEmployeeSchema } from "../../../schemas/addEmployeeSchema";
import { handleAddEmployee } from "../../../controller/handleAddEmployee";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddEmployee = ({ onClose }) => {
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data

    handleAddEmployee(
      value.empId,
      value.firstName,
      value.lastName,
      value.phoneNumber,
      value.email,
      value.password,
      value.dob,
      gender,
      value.address,
      status,
    );
  };

  const handleGender = (e) => {
    setGender(e.target.value);
    setFieldValue("gender", e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setFieldValue("status", e.target.value);
  };

  const {
    values,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      empId: "",
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      status: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
    },
    validationSchema: addEmployeeSchema,
    onSubmit,
  });

  return (
    <div className="w-[90%] min-w-[310px] md:w-[500px] h-[500px] bg-[#1A262D] rounded-[15px] pt-0 p-[10px]">
      <div className="w-full h-[50px] bg-[#1A262D] rounded-t-[15px] flex justify-end items-center">
        <button 
          className="w-[32px] h-[32px] rounded-[12px] bg-[#283943] flex justify-center items-center"
          onClick={() => onClose()}
        >
          <IoClose />
        </button>
      </div>
      <div className="h-[440px] overflow-y-scroll flex flex-col items-center p-[10px]">
        <h2 className="text-[14px] text-[#AEB0AF]">Add New Employee Details</h2>
        <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
          General Information
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col"
          autoComplete="off"
          action="POST"
        >
          <label htmlFor="empId">
            <h1 className="text-[14px] font-RobotoRegular">Emp Id</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${
              errors.empId && touched.empId ? "input-error" : ""
            }`}
            id="empId"
            type="text"
            value={values.empId}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.empId && touched.empId && (
            <p className="error">{errors.empId}</p>
          )}

          <label htmlFor="firstName">
            <h1 className="text-[14px] font-RobotoRegular">First Name</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${
              errors.firstName && touched.firstName ? "input-error" : ""
            }`}
            id="firstName"
            type="text"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <p className="error">{errors.firstName}</p>
          )}

          <label htmlFor="lastName">
            <h1 className="text-[14px] font-RobotoRegular">Last Name</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${
              errors.lastName && touched.lastName ? "input-error" : ""
            }`}
            id="lastName"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p className="error">{errors.lastName}</p>
          )}

          <label htmlFor="dob">
            <h1 className="text-[14px] font-RobotoRegular">Date of Birth</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] px-[10px] my-[10px] ${
              errors.dob && touched.dob ? "input-error" : ""
            }`}
            id="dob"
            type="date"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.dob && touched.dob && <p className="error">{errors.dob}</p>}

          <label htmlFor="gender">
            <h1 className="text-[14px] font-RobotoRegular">Gender</h1>
          </label>
          <div className="flex  items-center my-[10px]">
            <input
              id="gender"
              name="gender"
              type="radio"
              value="male"
              onChange={handleGender}
            />
            <label htmlFor="gender">
              <h1 className="text-[14px] ml-[5px] mr-[20px]">Male</h1>
            </label>
            <input
              id="gender"
              name="gender"
              type="radio"
              value="female"
              onChange={handleGender}
            />
            <label htmlFor="gender">
              <h1 className="text-[14px] ml-[5px] mr-[20px]">Female</h1>
            </label>
            <input
              id="gender"
              name="gender"
              type="radio"
              value="other"
              onChange={handleGender}
            />
            <label htmlFor="gender">
              <h1 className="text-[14px] ml-[5px] mr-[20px] ">Other</h1>
            </label>
          </div>
          {errors.gender && touched.gender && (
            <p className="error">{errors.gender}</p>
          )}

          <label htmlFor="address">
            <h1 className="text-[14px] font-RobotoRegular">Address</h1>
          </label>
          <textarea
            className={`w-full h-[70px] rounded-[8px] p-[10px] my-[10px] ${
              errors.address && touched.address ? "input-error" : ""
            }`}
            id="address"
            type="text"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address && (
            <p className="error">{errors.address}</p>
          )}

          <label htmlFor="phoneNumber">
            <h1 className="text-[14px] font-RobotoRegular">Phone Number</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${
              errors.phoneNumber && touched.phoneNumber ? "input-error" : ""
            }`}
            id="phoneNumber"
            type="text"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <p className="error">{errors.phoneNumber}</p>
          )}

          <label htmlFor="email">
            <h1 className="text-[14px] font-RobotoRegular">Email</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${
              errors.email && touched.email ? "input-error" : ""
            }`}
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}

          <label htmlFor="password">
            <h1 className="text-[14px] font-RobotoRegular">Password</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${
              errors.password && touched.password ? "input-error" : ""
            }`}
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}

          <label htmlFor="confirmPassword">
            <h1 className="text-[14px] font-RobotoRegular">Confirm Password</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }`}
            id="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <label htmlFor="status">
            <h1 className="text-[14px] font-RobotoRegular">Status</h1>
          </label>
          <label>
            <select
              id="status"
              className={` w-full h-[30px] rounded-[8px] pl-[10px] my-[10px] ${
                errors.status && touched.status ? "input-error" : ""
              }`}
              onChange={e => setStatus(e.target.value)}
            >
              <option value="cashier">Cashier</option>
              <option value="admin">Admin</option>
              <option value="subadmin">Sub Admin</option>
            </select>
          </label>
          {errors.status && touched.status && (
            <p className="error">{errors.status}</p>
          )}

          <button
            className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[30px] mb-[10px]"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
