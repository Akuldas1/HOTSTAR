/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'blue-gray-custom': '#8f98b2',
        custom: '#0e0e10'
      }
    },
    screens: {
      "desktop": "1920px",
      "laptops": "1300px",
      "tablets": "900px",
      "mobiles": "400px"
    },
    fontFamily:{
       body:['Inter']
    }
  },
  plugins: [],
}