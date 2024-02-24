/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'RubikRegular': ['Rubik-Regular','sans-serif'],
        'RobotoRegular': ['Roboto-Regular','sans-serif'],
      },
    },
  },
  plugins: [],
};
