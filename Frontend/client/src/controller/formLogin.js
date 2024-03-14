import axios from "axios";

const formLogin = async (email, password) => {
  try {
    const {data: res} = await axios //Send data to Backend
      .post("http://localhost:8000/login", {
        email,
        password,
      })
      localStorage.setItem("id", res.id);
      localStorage.setItem("token", res.token);
      localStorage.setItem("email", res.email);
      window.location = "/dashboard";
  } catch (error) {
    if(
      error.response && 
      error.response.status >= 400 && 
      error.response.status <= 500
    ){
      alert(error.response.data.message);
    }
  }
};

export { formLogin };
