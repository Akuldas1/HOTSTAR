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
      "laptops": "1294px",
      "tablets": "540px",
      "mobiles": "390px"
    },
    // screens: {
    //   "xs":"320px"
    // },
    fontFamily:{
       body:['Inter']
    }
  },
  plugins: [],
}