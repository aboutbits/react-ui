import { create } from '@storybook/theming/create'
import AboutBitsLogo from '../public/aboutbits.svg'

export default create({
  base: 'light',
  brandTitle: 'AboutBits React UI',
  brandUrl: 'https://react-ui.aboutbits.it',
  brandImage: AboutBitsLogo,
  fontBase:
    'HKGrotesk,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
})
