import axios from "axios";

const formLogin = async (email, password) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      window.location = "/dashboard"
  } catch (error) {
    console.log(error);
  }
};

export { formLogin };
