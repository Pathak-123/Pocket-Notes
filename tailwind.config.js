/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#F7ECDC',
        headingColor: '#E8E8E8',
      },
    },
  },
  plugins: [],
}