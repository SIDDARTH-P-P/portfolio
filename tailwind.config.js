/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        "tablet": "500px",
        "laptop": "1000px"
      }
    },
  },
  plugins: [],
}

