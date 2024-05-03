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
    // screens: {
    //   "desktop": "1800px",
    //   "laptops": "1500px",
    //   "tablets": "900px",
    //   "mobiles": "400px"
    // },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily:{
       body:['Inter']
    }
  },
  plugins: [],
}