/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#63BE67"
      },
      fontFamily: {
        sans: ["Noto Sans KR", 'sans-serif']
      }
    },
  },
  plugins: [],
};
