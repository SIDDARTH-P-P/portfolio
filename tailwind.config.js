/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        "phone": "360px",
        "phone2": "490px",
        "tab":"950px",
        "large":"1225px"
      },
      animation:{
        
      }
    },
  },
  plugins: [],
}

