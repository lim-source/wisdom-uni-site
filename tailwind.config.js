/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B8A9',
          dark: '#009688',
          light: '#4DD0C1',
        },
        teal: {
          DEFAULT: '#00B8A9',
          50: '#E6F7F5',
          100: '#CCF0EB',
          200: '#99E1D7',
          300: '#66D2C3',
          400: '#33C3AF',
          500: '#00B8A9',
          600: '#009688',
          700: '#007166',
          800: '#004D44',
          900: '#002622',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
