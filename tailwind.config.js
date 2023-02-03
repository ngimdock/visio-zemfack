/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },

      colors: ({ colors }) => ({
        primary: "#1C1D2A",
        secondary: "#4A4C6F",

        "custom-white": "#FCFCFC",
        "custom-bleu": "#3F50E9",
        "custom-indigo": "#674ABB",
        "custom-yelow": "#C9B239",
        "custom-red": "#C2235C",
        "custom-pink": "#AD1883",
        "custom-gray": "#4A4C6F",
      }),

      fontFamily: {
        Inter: ['"Inter"', "sans-serif"],
      },

      fontSize: {
        xx: ["0.63rem", { lineHeight: ".8rem" }],
      },
    },
  },
  plugins: [],
};
