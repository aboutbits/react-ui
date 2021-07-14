module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
  },

  theme: {
    extend: {
      boxShadow: {
        guestContainer: '0 3px 50px 0 rgba(0, 0, 0, 0.3)',
        languageSelector: '0 3px 6px 0 rgba(0, 0, 0, 0.14)',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
      },
      maxWidth: {
        content: '60rem',
      },
      minWidth: {
        dialog: '17.5rem',
        50: '12.5rem',
      },
      minHeight: {
        14: '3.5rem',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'rgba(0,0,0,0)',
      primary: {
        DEFAULT: '#19509c',
        50: '#ebebeb',
        100: '#ecf1f8',
        400: '#5685d0',
        700: '#082855',
        800: '#0d284e',
        900: '#03152e',
      },
      gray: {
        50: '#f0f0f0',
        100: '#dedede',
        300: '#95a0b2',
        DEFAULT: '#9fa3aa',
        600: '#545d6e',
        700: '#48505f',
      },
      critical: {
        100: '#ffcece',
        DEFAULT: '#ff7979',
        700: '#881c27',
      },
      green: {
        DEFAULT: '#57a870',
        700: '#047857',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      textColor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
