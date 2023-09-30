/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      height: {
        200: "800px",
        ["banner-home"]: "800px",
      },
    },
  },
  plugins: [],
};
