import { React } from "react";
import { useFormik } from "formik";
import { addEmployeeSchema } from "../../../schemas/addEmployeeSchema";

const AddEmployee = () => {

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
  };

  const { values, handleBlur, errors, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        empId: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        email: "",
      },
      validationSchema: addEmployeeSchema,
      onSubmit,
    });

  return (

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
        <label htmlFor="empId"><h1 className="text-[14px] font-RobotoRegular">Emp Id</h1></label>
        <input 
          className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${errors.empId && touched.empId ? "input-error" : ""}`} 
          id="empId" 
          type="text"
          value={values.empId}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.empId && touched.empId && (
          <p className="error">{errors.empId}</p>
        )}

        <label htmlFor="firstName"><h1 className="text-[14px] font-RobotoRegular">First Name</h1></label>
        <input 
          className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${errors.firstName && touched.firstName ? "input-error" : ""}`} id="firstName" 
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName && (
          <p className="error">{errors.firstName}</p>
        )}

        <label htmlFor="lastName"><h1 className="text-[14px] font-RobotoRegular">Last Name</h1></label>
        <input 
          className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${errors.lastName && touched.lastName ? "input-error" : ""}`} id="lastName" 
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && (
          <p className="error">{errors.lastName}</p>
        )}

        <label htmlFor="dob"><h1 className="text-[14px] font-RobotoRegular">Date of Birth</h1></label>
        <input className={`w-full h-[30px] rounded-[8px] px-[10px] my-[10px]`} id="dob" type="date"/>

        <label htmlFor="gender"><h1 className="text-[14px] font-RobotoRegular">Gender</h1></label>
        <div className="flex  items-center my-[10px]">
          <input id="gender" name = "gender" type="radio"/><label htmlFor="gender"><h1 className="text-[14px] ml-[5px] mr-[20px]">Male</h1></label>
          <input id="gender" name = "gender" type="radio"/><label htmlFor="gender"><h1 className="text-[14px] ml-[5px] mr-[20px]">Female</h1></label>
          <input id="gender" name = "gender" type="radio"/><label htmlFor="gender"><h1 className="text-[14px] ml-[5px] mr-[20px]">Other</h1></label>
        </div>

        <label htmlFor="address"><h1 className="text-[14px] font-RobotoRegular">Address</h1></label>
        <textarea 
          className={`w-full h-[70px] rounded-[8px] p-[10px] my-[10px] ${errors.address && touched.address ? "input-error" : ""}`} 
          id="address" 
          type="text"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address && touched.address && (
          <p className="error">{errors.address}</p>
        )}

        <label htmlFor="phoneNumber"><h1 className="text-[14px] font-RobotoRegular">Phone Number</h1></label>
        <input 
          className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${errors.phoneNumber && touched.phoneNumber ? "input-error" : ""}`} id="phoneNumber" 
          type="text"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <p className="error">{errors.phoneNumber}</p>
        )}

        <label htmlFor="email"><h1 className="text-[14px] font-RobotoRegular">Email</h1></label>
        <input 
          className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${errors.email && touched.email ? "input-error" : ""}`} 
          id="email" 
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="status"><h1 className="text-[14px] font-RobotoRegular">Status</h1></label>
        <label>
        <select className={` w-full h-[30px] rounded-[8px] pl-[10px] my-[10px]`}>
          <option value="cashier">Cashier</option>
          <option value="admin">Admin</option>
          <option value="subadmin">Sub Admin</option>
        </select>
        </label>
        {/* <input className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px]`} id="status" type="text"/> */}

        <button
          className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[30px] mb-[10px]"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
