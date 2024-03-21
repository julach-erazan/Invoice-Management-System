import axios from "axios";

const handleUpdateEmployee = async (
  id,
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

    const response = await axios //Send data to Backend
      .post("http://localhost:8000/updateemployee", {
        id,
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

export { handleUpdateEmployee };
