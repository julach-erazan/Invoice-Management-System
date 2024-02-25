import axios from "axios";
import { encryptData } from "./encryptData";

const validateInputs = async (
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
  confirmPassword,

  firstNameRef,
  lastNameRef,
  phoneNumberRef,
  emailRef,
  passwordRef,
  confPasswordRef
) => {
  if (firstName == "") {
    //firstName validation
    setError(firstNameRef, "First Name");
  } else {
    setSuccess(firstNameRef);
  }

  if (lastName == "") {
    //lastName validation
    setError(lastNameRef, "Last Name");
  } else {
    setSuccess(lastNameRef);
  }

  if (phoneNumber == "") {
    //phone Number validation
    setError(phoneNumberRef, "Phone Number");
  } else {
    if (validatePhoneNumberFormat(phoneNumberRef)) {
      setSuccess(phoneNumberRef);
    } else {
      setError(phoneNumberRef, "Phone Number");
    }
  }

  if (email == "") {
    //email validation
    setError(emailRef, "Email");
  } else {
    if (validateMailFormat(emailRef)) {
      setSuccess(emailRef);
    } else {
      setError(emailRef, "Email");
    }
  }

  if (password == "") {
    //password validation
    setError(passwordRef, " Password");
  } else {
    setSuccess(passwordRef);
    if (validatePasswordFormat(passwordRef)) {
      setSuccess(passwordRef);
    } else {
      setError(passwordRef, "Password");
    }
  }

  if (confirmPassword == "") {
    //confirm Password validation
    setError(confPasswordRef, "Confirm Password");
  } else {
    setSuccess(confPasswordRef);
  }

  if (
    password == confirmPassword &&
    !password == "" &&
    !confirmPassword == ""
  ) {

    alert("Create account Successfully.")
    window.location.replace("http://localhost:3000/");
    const hashedPassword = encryptData(password); //Password Encryption

    await axios //Send data to Backend
      .post("http://localhost:8000/signup", {
        firstName,
        lastName,
        phoneNumber,
        email,
        hashedPassword,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));

  } else {
    console.log("Password is not matched.");
    setError(passwordRef, " Password");
    setError(confPasswordRef, "Confirm Password");
    clearInput(passwordRef);
    clearInput(confPasswordRef);
  }
};

const setSuccess = (ref) => {
  //Success fields
  ref.current.style.borderColor = "green";
};

const setError = (ref, message) => {
  //Empty fields handle
  ref.current.style.borderColor = "red";
  console.log(message + " is Required!");
};

const validateMailFormat = (emailRef) => {
  //Check email validity
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailRef.current.value.match(mailFormat)) {
    return true;
  } else {
    console.log("Email is not valid!");
    clearInput(emailRef);
    return false;
  }
};

const validatePhoneNumberFormat = (phoneNumberRef) => {
  //Check phone number validity
  const phoneNumberFormat =
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (phoneNumberRef.current.value.match(phoneNumberFormat)) {
    return true;
  } else {
    console.log("Phone Number is not valid!");
    clearInput(phoneNumberRef);
    return false;
  }
};

const validatePasswordFormat = (passwordRef) => {
  //Check Password Format
  const passwordFormat =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (passwordRef.current.value.match(passwordFormat)) {
    return true;
  } else {
    console.log("Password is not valid!");
    clearInput(passwordRef);
    return false;
  }
};

const clearInput = (ref) => {
  //Clear input fields
  ref.current.value = "";
};

export {
  validateInputs,
  setError,
  setSuccess,
  validateMailFormat,
  validatePhoneNumberFormat,
  validatePasswordFormat,
};
