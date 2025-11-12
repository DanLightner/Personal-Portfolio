/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Golf-themed color palette
        'golf-green': {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce4ca',
          300: '#8fcea8',
          400: '#5cb07e',
          500: '#3a8f5f', // Main green (fairway)
          600: '#2a724c',
          700: '#235b3f',
          800: '#1f4a35',
          900: '#1a3d2c',
        },
        'golf-brown': {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e7d8c0',
          300: '#d6bc96',
          400: '#c49a6a',
          500: '#b5824f', // Sand trap brown
          600: '#a66d42',
          700: '#8a5838',
          800: '#704833',
          900: '#5d3c2c',
        },
        'golf-sky': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Sky blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'golf-white': '#ffffff', // Golf ball white
        'golf-flag': '#dc2626', // Flag red
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'retro': ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px',
        'pixel-sm': '2px 2px 0px 0px',
        'pixel-lg': '6px 6px 0px 0px',
      },
    },
  },
  plugins: [],
}

