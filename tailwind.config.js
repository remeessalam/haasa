/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#912092",
        secondary: "#3c238e",
        common: "#ff9400",
        hightlighted: "#C5D82E",
        bannerBackground: "#100f1e",
        bgcolor: "#f3f3f3",
      },
      fontFamily: {
        montserrat: ['"Montserrat Alternates"', "sans-serif"],
        candal: ['"Candal"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
