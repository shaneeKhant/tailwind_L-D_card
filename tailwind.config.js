/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'Playfair': ['Playfair Display', 'serif'],
      'Inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          100: "#d1dbe0",
          200: "#a4b6c1",
          300: "#7692a3",
          400: "#496d84",
          500: "#1b4965",
          600: "#163a51",
          700: "#102c3d",
          800: "#0b1d28",
          900: "#050f14"
        },
        secondary: {
          100: "#d9d8d7",
          200: "#b3b1b0",
          300: "#8c8b88",
          400: "#666461",
          500: "#403d39",
          600: "#33312e",
          700: "#262522",
          800: "#1a1817",
          900: "#0d0c0b"
        },
        backgrounds: {
          100: "#deeefa",
          200: "#bdddf5",
          300: "#9ccbf0",
          400: "#7bbaeb",
          500: "#5aa9e6",
          600: "#4887b8",
          700: "#36658a",
          800: "#24445c",
          900: "#12222e"
        },

        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },

        Text: {
          100: "#fcfcfc",
          200: "#fafafa",
          300: "#f7f7f7",
          400: "#f5f5f5",
          500: "#f2f2f2",
          600: "#c2c2c2",
          700: "#919191",
          800: "#616161",
          900: "#303030"
        },

      }
    },
  },
  plugins: [],
}

