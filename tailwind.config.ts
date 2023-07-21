import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './src/**/theme.ts',
    './src/**/*.stories.tsx',
    './src/**/*.templates.tsx',
    './src/**/*.mdx',
    './.storybook/preview.tsx',
  ],
  theme: {
    extend: {
      colors: {
        purple: colors.purple,
      },
    },
  },
  darkMode: 'class',
  presets: [require('./tailwind-preset.js')],
  plugins: [require('@tailwindcss/forms')],
} satisfies Config
