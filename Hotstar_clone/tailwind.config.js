
export default {
  content:[
    "./index.html",
    "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
    screens: {
      "desktop": "1800px",
      "laptops": "1500px",
      "tablets": "900px",
      "mobiles": "400px"
    },
    fontFamily:{
       body:['Inter']
    }
  },
  plugins: [],
}