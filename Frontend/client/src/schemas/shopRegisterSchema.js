import * as yup from "yup";

const phoneNumberRules = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//Must contain 10 numbers

export const shopRegisterSchema = yup.object().shape({
    shopName: yup.string().required("Required"),
    logoPath: yup.mixed().required("Required"),
    shopRegistationNumber: yup.string(),
    email: yup.string().email("Please enter a valid email"),
    phoneNumber: yup
    .string()
    .matches(phoneNumberRules, "Please enter valid Phone number"),
    address: yup.string(),
});