import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Discord': '#424549',
      'Blanco': '#fff',
    },
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities, addComponents, e, config}){
      
      

    })

    
  ],
}

