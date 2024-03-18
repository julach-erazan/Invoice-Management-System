import * as yup from "yup";

const phoneNumberRules = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//Must contain 10 numbers

export const addEmployeeSchema = yup.object().shape({
    empId: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    address: yup.string().required("Required"),
    phoneNumber: yup
    .string()
    .matches(phoneNumberRules, "Please enter valid Phone number")
    .required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
});