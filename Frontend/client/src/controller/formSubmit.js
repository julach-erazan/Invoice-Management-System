import axios from "axios";
import { encryptData } from "./encryptData";

const formSubmit = async (
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
) => {
  const hashedPassword = encryptData(password); //Encrypt the password

  await axios //Send data to Backend
    .post("http://localhost:8000/signup", {
      firstName,
      lastName,
      phoneNumber,
      email,
      hashedPassword,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err.message));
};

export { formSubmit };
