/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1E3A8A',
        teal: '#008080',
        yellow: '#FFD700',
        purple: '#800080',
      },
      boxShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.3)',
      },
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};