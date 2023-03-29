/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark-blue" : "#000235",
        "primary" : "#FFFFFF",
        "blue" : "#1157A2",
        "gray" : "#c5c5c554",
        "dblue" : "#181449",
        
      },
      screens :{

        'sm':{'min': '350px', 'max': '750px'},

        'md': {'min': '750px', 'max': '1060px'},

      }
    },
  },
  plugins: [],
}
