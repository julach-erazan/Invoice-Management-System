import bcrypt from "bcryptjs";

const encryptData = (plainText) => {
  const hashedText = bcrypt.hashSync(plainText, 10); //Encrypted Plain text

  return hashedText;
};

export { encryptData };
