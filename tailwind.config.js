/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carnation: {
          50: "#fff1f2",
          100: "#ffdfe1",
          200: "#ffc5c8",
          300: "#ff9da2",
          400: "#ff646c",
          500: "#ff4e57",
          600: "#ed1520",
          700: "#c80d17",
          800: "#a50f17",
          900: "#88141a",
          950: "#4b0408",
        },
      },
    },
  },
  plugins: [],
};
