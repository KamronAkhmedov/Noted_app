/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: "#080808",
      "dark-gray": "#101010",
      gray: "#121212",
      "gray-light": "#313131",
      primary: "#FF007F",
      red: "#AB192A",
      white: '#fff'
    },
    backgroundImage: {
      gradient: 'url(./assets/gradient.png)'
    },
    extend: {},
  },
  plugins: [],
}