import axios from "axios";

const formLogin = async (email, password) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      if(response.data.token != null){
        window.location = "/dashboard";
      }
      // window.location = "/dashboard"

      console.log(response.data.token);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export { formLogin };
