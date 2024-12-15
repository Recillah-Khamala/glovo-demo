/** @type {import('tailwindcss').Config} */
// frontend/tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glovo-green': '#00A082',  // Glovo Green
        'glovo-yellow': '#FFC244',  // Glovo Yellow
      },
    },
  },
  plugins: [],
}

