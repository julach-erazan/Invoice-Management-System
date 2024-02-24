import axios from "axios";

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
    setError(firstNameRef, "First Name");
  } else {
    setSuccess(firstNameRef, firstName);
  }

  if (lastName == "") {
    setError(lastNameRef, "Last Name");
  } else {
    setSuccess(lastNameRef, lastName);
  }

  if (phoneNumber == "") {
    setError(phoneNumberRef, "Phone Number");
  } else {
    setSuccess(phoneNumberRef, phoneNumber);
  }

  if (email == "") {
    setError(emailRef, "Email");
  } else {
    setSuccess(emailRef, email);
  }

  if (password == "") {
    setError(passwordRef, " Password");
  } else {
    setSuccess(passwordRef, password);
  }

  if (confirmPassword == "") {
    setError(confPasswordRef, "Confirm Password");
  } else {
    setSuccess(confPasswordRef, confirmPassword);
  }

  if(password == confirmPassword){
    console.log("Password is matched.");
  }else{
    console.log("Password is not matched.");
    setError(passwordRef, " Password");
    setError(confPasswordRef, "Confirm Password");
    clearInput(passwordRef);
    clearInput(confPasswordRef);
  }

};

const setSuccess = (ref, message) => {
  ref.current.style.borderColor = "green";
  console.log("First Name is " + message);
};

const setError = (ref, message) => {
  ref.current.style.borderColor = "red";
  
  ref.current.placeholder = message + " is Required!"
  // alert(message + " is Required!")
};

const clearInput = (ref) => {
  ref.current.value = "";
}

export { validateInputs };
