import axios from "axios";

const shopRegSubmit = async (
  shopName,
  path,
  shopRegistationNumber,
  email,
  phoneNumber,
  address
) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8000/shopregister", {
        shopName,
        path,
        shopRegistationNumber,
        email,
        phoneNumber,
        address,
      });

      console.log(path);

    if (response.status == 201) {
      alert(response.data.message);
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { shopRegSubmit };
