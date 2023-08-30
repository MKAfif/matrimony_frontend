/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'custom-width':'700px', 
      },
      height:{
        'custom-h'    : '652px'
      },
      colors: {
        custom: '#E3DACB',
        logo: '#FF9902',
        ashcolor : '#DAD6D6',
        lightblack:'#272829',
        pg1 :'#5cbb67',
        pg2 : '#1999a7'
       
      }
    },
  },
  plugins: [],
}

