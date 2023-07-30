// import type { Config } from 'tailwindcss'
// import colors from 'tailwindcss/colors'

import forms from '@tailwindcss/forms'
import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import preset from './tailwind-preset'

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
  presets: [preset],
  plugins: [forms],
} satisfies Config
