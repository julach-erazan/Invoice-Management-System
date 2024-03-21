import * as yup from "yup";

const phoneNumberRules = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//Must contain 10 numbers

export const addEmployeeSchema = yup.object().shape({
    empId: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    dob: yup.string().required("Required"),
    gender: yup.string().required("Required"),
    phoneNumber: yup
    .string()
    .matches(phoneNumberRules, "Please enter valid Phone number")
    .required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().required("Required"),
    password: yup.string().required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Please must match")
        .required("Required"),
    address: yup.string().required("Required"),
});