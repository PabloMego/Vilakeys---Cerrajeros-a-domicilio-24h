/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: {
          50: '#fcfaf6',
          100: '#f7f3ec',
          200: '#efe7da',
          300: '#e5d7c3',
          400: '#d7c2a7',
        },
        bark: {
          900: '#231d19',
          800: '#2d241f',
          700: '#41352e',
          600: '#5c4d43',
          500: '#7e6c5f',
        },
        terracotta: {
          600: '#94543b',
          500: '#ac6448',
          100: '#f5e8e2',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(45, 36, 31, 0.08), 0 2px 6px -1px rgba(45, 36, 31, 0.04)',
        'warm-lg': '0 10px 25px -3px rgba(45, 36, 31, 0.12), 0 4px 10px -2px rgba(45, 36, 31, 0.06)',
      }
    },
  },
  plugins: [],
}
