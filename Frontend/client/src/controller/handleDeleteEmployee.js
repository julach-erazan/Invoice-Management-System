import axios from "axios";

const handleDeleteEmployee = async (
  id
) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8000/deleteemployee", {
        id
      });

    if(response.status === 201){
      alert(response.data.message);
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleDeleteEmployee };