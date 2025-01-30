/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#912092",
        secondary: "#3c238e",
        common: "#ff9400",
        bannerBackground: "#100f1e",
      },
    },
  },
  plugins: [],
};
