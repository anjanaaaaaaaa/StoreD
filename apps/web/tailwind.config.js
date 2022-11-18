/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        offWhite: "#f6f6f6",
        offWhiteDarker: "#f0f0f0",
        mattBlack: "#12131a",
        satanicPurple: "#583da1",
      },
    },
  },
  plugins: [],
};
