/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#feb616',
          'yellow-hover': '#f0a905',
          'yellow-light': '#fed977',
          'yellow-dark': '#e59800',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'solid-black': '2px 2px 0px 0px #000000',
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}

