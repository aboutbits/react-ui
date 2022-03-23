module.exports = {
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './.storybook/preview.js',
    ],

  theme: {
    extend: {
      minWidth: {
        dialog: '17.5rem',
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
        DEFAULT: '#4C6EE8',
        50: '#f6f8fe',
        100: '#edf0fd',
        400: '#738ded',
        700: '#1d46dd',
        800: '#193ec2',
        900: '#1534a2',
      },
      secondary: {
        DEFAULT: '#2b2d36',
        100: '#4C5162',
        300: '#2C2E39',
        700: '#101423',
        900: '#080B1A',
      },
      gray: {
        DEFAULT: '#D2D3D3',
        50: '#FDFDFD',
        100: '#FBFBFB',
        300: '#EDEDEE',
        400: '#E4E4E5',
        600: '#B1B1B3',
        700: '#797A7C',
        800: '#4C4D51',
        900: '#1F2125',
      },
      critical: {
        100: '#FFD0D2',
        DEFAULT: '#FF696F',
        700: '#FF4C52',
      },
      positive: {
        100: '#B3F2E8',
        DEFAULT: '#00D3B2',
        700: '#00C8A2',
      },
      green: {
        100: '#B3F2E8',
        DEFAULT: '#00D3B2',
        700: '#00C8A2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
