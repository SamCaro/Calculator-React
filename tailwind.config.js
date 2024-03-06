/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3d-white': '0 2px 4px 0 rgba(255, 255, 255, 0.05), 0 2px 10px 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

