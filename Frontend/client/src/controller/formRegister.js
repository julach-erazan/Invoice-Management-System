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

    if(response.data.message == 'User registered successfully'){
      alert(response.data.message);
      window.location = "/"
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { formSubmit };
