import axios from "axios";

const handleAddEmployee = async (
  empId,
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
  dob,
  gender,
  address,
  status
) => {
  try {

    console.log(status)

    const userId = sessionStorage.getItem("id");

    const response = await axios //Send data to Backend
      .post("http://localhost:8000/addemployee", {
        userId,
        empId,
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        dob,
        gender,
        address,
        status,
      });

    if (response.status === 201) {
      alert(response.data.message);
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleAddEmployee };
