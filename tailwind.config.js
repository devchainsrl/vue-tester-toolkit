// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: false, /* was [] */
  darkMode: 'media', // 'media', // or 'media' or 'class'
  variants: {
    extend: {}
  },
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      black: colors.black,
      white: colors.white,
      accent: colors.rose,
      'dark:accent': colors.rose,
      primary: colors.teal,
      secondary: colors.orange,
      dark: colors.coolGray
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  }
}
