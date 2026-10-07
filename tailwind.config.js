/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/presentation/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      fontFamily:{
        'work-black': ['WorkSans-Black','sans-serif'],
        'work-light': ['WorkSans-Light','sans-serif'],
        'work-medium': ['WorkSans-Medium','sans-serif'],
      }



    },
  },
  plugins: [],
}

