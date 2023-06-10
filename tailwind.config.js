/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#11393C",
        "color-secondary": "#F08354",
        "dark-green": "#10383B",
        "color-gray": "#8B908C",
        "color-light-green": "#3A4F4F",
        "color-light-gray": "#526362",
        "color-mix": "#FCFAF6",
        "color-white": "#ffffff",
        "color-full": "#F5F5F5",
        "color-redish": "#9DB7B3",
        "color-dark-orange": "#E66A35"

      },




      container: {
        center: true,
        padding: {
          md: "135px",
          DEFAULT: "20px",
        },
      },

     
    },
  },
  plugins: [],
}
