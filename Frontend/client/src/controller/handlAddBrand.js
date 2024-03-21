import axios from "axios";

const handleAddBrand = async (
  brandName,
) => {
  try {

    const userId = sessionStorage.getItem("id");

    const response = await axios //Send data to Backend
      .post("http://localhost:8000/addbrand", {
        userId,
        brandName,
      });

    if (response.status === 201) {
      alert(response.data.message);
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleAddBrand };