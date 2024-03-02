import axios from "axios";

const formSubmit = async (
  firstName,
  lastName,
  phoneNumber,
  email,
  password
) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8000/signup", {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

    console.log(response.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export { formSubmit };
