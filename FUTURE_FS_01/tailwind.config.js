/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        accent: {
          light: '#2563EB',
          dark: '#60A5FA',
        },
        background: {
          light: '#F8F9FA',
          dark: '#0B1120',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#111827',
        },
      },
    },
  },
  plugins: [],
}