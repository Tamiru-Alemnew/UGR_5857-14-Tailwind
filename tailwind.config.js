/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridColumn: {
        full: "1 / -1",
      },
    },
  },
  plugins: [],
};

