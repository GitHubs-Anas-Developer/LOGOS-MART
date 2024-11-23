/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind works in all your JS/TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui")],
};
