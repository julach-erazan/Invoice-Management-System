import { React } from "react";
import { useFormik } from "formik";
import { IoClose } from "react-icons/io5";

const AddStocks = () => {
  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
  };

  return (
      <div className="h-[440px] overflow-y-scroll flex flex-col items-center p-[10px]">
        <h2 className="text-[14px] text-[#AEB0AF]">Add New Stock Details</h2>
        <h1 className="text-[20px] text-[#E4E4E4] font-RobotoRegular">
          General Information
        </h1>

        <form
          //   onSubmit={handleSubmit}
          className="w-full flex flex-col"
          autoComplete="off"
          action="POST"
        >
          <label htmlFor="itemId">
            <h1 className="text-[14px] font-RobotoRegular">Item Id</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px]`}
            id="itemId"
            type="text"
          />

          <label htmlFor="status">
            <h1 className="text-[14px] font-RobotoRegular">Brand</h1>
          </label>
          <label>
            <select
              id="status"
              className={` w-full h-[30px] rounded-[8px] pl-[10px] my-[10px]`}
            ></select>
          </label>

          <label htmlFor="itemId">
            <h1 className="text-[14px] font-RobotoRegular">Category</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px]`}
            id="itemId"
            type="text"
          />

          <label htmlFor="itemId">
            <h1 className="text-[14px] font-RobotoRegular">Quentity</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px]`}
            id="itemId"
            type="text"
          />

          <label htmlFor="itemId">
            <h1 className="text-[14px] font-RobotoRegular">Buying Price</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px]`}
            id="itemId"
            type="text"
          />

          <label htmlFor="itemId">
            <h1 className="text-[14px] font-RobotoRegular">Buying Price</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px]`}
            id="itemId"
            type="text"
          />

          <label htmlFor="itemId">
            <h1 className="text-[14px] font-RobotoRegular">Selling Price</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px]`}
            id="itemId"
            type="text"
          />

          <label htmlFor="itemId">
            <h1 className="text-[14px] font-RobotoRegular">Minimum Price</h1>
          </label>
          <input
            className={`w-full h-[30px] rounded-[8px] p-[10px] my-[10px]`}
            id="itemId"
            type="text"
          />

          <label htmlFor="itemId">
            <h1 className="text-[14px] font-RobotoRegular">Description</h1>
          </label>
          <textarea
            className={`w-full h-[70px] rounded-[8px] p-[10px] my-[10px]`}
            id="itemId"
            type="text"
          />

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

export default AddStocks;
