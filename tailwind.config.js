/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#2a0f69',
        primaryContent: '#363e96',
        primarySubcontent: '#2d4f8a',
        primaryBase: '#a9b5b4',
        primaryAccent: '#101440',
        primaryBg: '#f6f6f6',
      },
    },
  },
  plugins: [],
}

