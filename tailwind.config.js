/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      raleway: ['Raleway','sans-serif']
    },
    screens: {
      'mobile': {'max': '320px'},
      'tablet': {'max': '640px'},
      'laptop':  {'max': '1024px'},
      'desktop':  {'max': '1280px'},
    },
    colors: {
      primary: '#5CDB95',
      light_text: '#EDF5E1',
      accent: '#05386B',
      primary_dark: '#379683',
      primary_light: '#8EE4AF'
    }
  
  },
  plugins: [],
  darkMode: "class"
}

