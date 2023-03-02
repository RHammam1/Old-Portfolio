/** @type {import('tailwindcss').Config} */
module.exports = {
  


  darkmode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        burtons: "burtons",
      },
      minHeight: {
        '80': '20rem'
      }


    },
  },
  plugins: [],
}