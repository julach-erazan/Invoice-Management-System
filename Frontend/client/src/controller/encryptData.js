import bcrypt from "bcryptjs";

const encryptData = async  (plainText) => {
  const salt = bcrypt.genSaltSync(10); //Generate random Salt
  const hashedText = await bcrypt.hash(plainText, salt); //Encrypted Text

    return hashedText;
//   console.log(hashedPassword);
};

export { encryptData };
