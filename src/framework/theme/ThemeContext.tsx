import { createContext, useContext } from 'react'
import { Theme } from './theme'

export const ThemeContext = createContext<Theme | undefined>(undefined)

export function useTheme(): Theme {
  const theme = useContext(ThemeContext)

  if (theme === null || theme === undefined) {
    throw new Error('No theme available on context')
  }

  return theme
}
