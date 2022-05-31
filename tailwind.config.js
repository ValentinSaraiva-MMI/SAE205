module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "noir": "#262626",
        "Beige": {
          "150": "#d4cebd"
        }
      },
      "fontFamily": {
        "oswald": "Oswald"
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
      zIndex: {
        '100': '100',
        '111': '111'
      },

    },

  },
  plugins: [require('@tailwindcss/forms'),
  ],
}
