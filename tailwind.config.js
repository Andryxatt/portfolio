/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   moveDiagonal1: {
      //     '0%, 100%': { transform: 'translate(-10px, 10px)' },
      //     '50%': { transform: 'translate(0, 30px)' }, // Adjust as needed for the diagonal movement
      //   },
      //   moveDiagonal2: {
      //     '0%, 100%': { transform: 'translate(0, 0)' },
      //     '50%': { transform: 'translate(-10px, -20px)' }, // Opposite diagonal direction
      //   },
      //   moveDiagonal3: {
      //     '0%, 100%': { transform: 'translate(0, 10px)' },
      //     '50%': { transform: 'translate(10px, 30px)' }, // Adjust as needed for the diagonal movement
      //   },
      //   moveDiagonal4: {
      //     '0%, 100%': { transform: 'translate(10px, -30px)' },
      //     '50%': { transform: 'translate(-10px, -30px)' }, // Opposite diagonal direction
      //   },
      //   'rotate-add': {
      //     '0%': { transform: 'rotate(0deg)' },
      //     '25%': { transform: 'rotate(60deg)' },
      //     '50%': { transform: 'rotate(-180deg)' },
      //     '75%': { transform: 'rotate(-120deg)' },
      //     '100%': { transform: 'rotate(0deg)' },
      //   },
      //   'vibrate-thunder': {
      //     '0%': { transform: 'translateX(0) rotate(0deg)' },
      //     '25%': { transform: 'translateX(-1px) rotate(-0.5deg)' },
      //     '50%': { transform: 'translateX(1px) rotate(0.5deg)' },
      //     '75%': { transform: 'translateX(-1.5px) rotate(-1deg)' },
      //     '100%': { transform: 'translateX(1.5px) rotate(1deg)' },
      //   },
      // },
      animation: {
        // 'move-diagonal-1': 'moveDiagonal1 2s ease-in-out infinite',
        // 'move-diagonal-2': 'moveDiagonal2 2s ease-in-out infinite',
        // 'move-diagonal-3': 'moveDiagonal3 2s ease-in-out infinite',
        // 'move-diagonal-4': 'moveDiagonal4 2s ease-in-out infinite',
        // 'rotate-add': 'rotate-add 2s ease-in-out infinite',
        // 'vibrate-thunder': 'vibrate-thunder 2s ease-in-out infinite',
      },
      colors: {
        'primary': '#5454D4',
        'secondary': '#5454D4',
      },
      dropShadow: {
        'custom': '5px 5px 10px rgba(92, 95, 92, 0.8)', // Кастомна тінь
        'gloving': '5px 20px 10px rgba(92, 95, 92, 0.8)', 
      },
      fontFamily: {
        custom: ['"Nunito Sans"', 'sans-serif'],
    },
  },
},
  plugins: [],
}