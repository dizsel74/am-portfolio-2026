/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gallerist-bg': '#F9F9F7',
        'gallerist-black': '#1A1A1A',
        'gallerist-grey': '#666666',
      },
    },
  },
  plugins: [],
}