/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '768px',
        'sm': '480px',
        'xl': '1440px'
      }
    },
  },
  plugins: [],
}

