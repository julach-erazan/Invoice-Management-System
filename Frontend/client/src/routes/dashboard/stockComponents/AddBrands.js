import { React } from "react";
import { useFormik } from "formik";
import { handleAddBrand } from "../../../controller/handlAddBrand";
import { addBrandSchema } from "../../../schemas/addBrandSchema";

const AddBrands = () => {
  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    
    handleAddBrand(
      values.brandName
    );
  };

  const {values,handleBlur,errors,touched,setFieldValue,handleChange,handleSubmit} = useFormik({
    initialValues: {
      brandName: "",
    },
    validationSchema: addBrandSchema,
    onSubmit,
  });

  return (
      <div className="h-[440px] flex flex-col items-center p-[10px]">
        <h2 className="text-[14px] text-[#AEB0AF]">Add New Brand</h2>
        <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
          General Information
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col"
          autoComplete="off"
          action="POST"
        >
          <label htmlFor="brandName">
            <h1 className="text-[14px] font-RobotoRegular">Brand Name</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px] ${
              errors.empId && touched.empId ? "input-error" : ""
            }`}
            id="brandName"
            type="text"
            value={values.brandName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.brandName && touched.brandName && (
            <p className="error">{errors.brandName}</p>
          )}

          <button
            className="w-[120px] h-[36px] text-white font-semibold rounded-[13px] bg-[#01579B] mt-[20px] mb-[10px]"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>

  );
};

export default AddBrands;
