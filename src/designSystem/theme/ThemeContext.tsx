import { createContext, useContext } from 'react'
import { defaultTheme, Theme } from './theme'

export const ThemeContext = createContext<Theme>(defaultTheme)

export function useTheme(): Theme {
  const theme = useContext(ThemeContext)

  if (theme === null) {
    throw new Error('No theme available on context')
  }

  return theme
}
