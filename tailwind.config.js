module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {},
    fontFamily: {
      font: ["Comfortaa", "cursive"],
    },
  },
  plugins: [require("daisyui")],
};
