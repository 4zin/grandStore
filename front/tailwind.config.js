/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6333ae',
        'secondary': '#2a2263',
        'accents': '#aa7eee'
      },
    },
  },
  plugins: [],
}

