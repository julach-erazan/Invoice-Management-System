import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters

export const loginFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, "Please create a strong password")
        .required("Required"),
});
