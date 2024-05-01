/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#1B9CE4",
        'secondary':"#64EBB6",
        'success':"#55C42E",
        'error':"#ef5734",
        'dark':"#000",
        'black':"#333",
        'gray':"#eee",
        'dark-gray':"#ddd",
        'primary-bg':"#f3f6f8",
        "pending":"#ffdd00",
        "blocked":"#f85a40",
        "active":"#00c16e"
      },
      screens: {
        "xs":{'max':"560px"},
        "sm":{'max':"768px"},
        "md":{'max':"992px"},
        "lg":{'max':"1200px"},
        "xl":{'max':"1440px"},
        "2xl":{'max':"1560px"},
      },
      fontFamily:{
        'ubunut':["Ubuntu"]
      }
    },
  },
  plugins: [],
}