import axios from "axios";

const shopRegSubmit = async (
  shopName,
  image,
  shopRegistationNumber,
  email,
  phoneNumber,
  address
) => {
  try {

    const formData = new FormData();
    formData.append("userId", localStorage.getItem("id"));
    formData.append("shopName", shopName);
    formData.append("logoPath", image);
    formData.append("shopRegistationNumber", shopRegistationNumber);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", address);

    const response = await axios //Send data to Backend
      .post("http://localhost:8000/shopregister", formData);

    if (response.status === 201) {
      alert(response.data.message);
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { shopRegSubmit };
