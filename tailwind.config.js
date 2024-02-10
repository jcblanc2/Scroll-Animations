/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5vw': '96px',
      '5rem': '2rem',
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', '-apple-system',],
        'lato': ['Lato', 'ui-sans-serif',],
      },
      colors: {
        'cbd': '#424242',
        'cbg': '#161616',
        'txt': '#f2994a',
        'black-bg': "#111111"
      },
      screens: {
        "wide": "1440px",
        'mb': { 'max': '500px' },
        'md': { 'max': '600px' },
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}