// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        customGreen: "#00CCBB",
      },
    },
  },
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
