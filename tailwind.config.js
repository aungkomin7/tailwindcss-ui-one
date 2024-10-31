/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': '#1b071f',
        'background': '#fdf9fe',
        'primary': '#ba32d4',
        'secondary': '#e58694',
        'accent': '#df7a68',
       },
      
       fontFamily: {
        'poppins': ["Poppins"],
      },  
       
    },
  },
  plugins: [],
}

