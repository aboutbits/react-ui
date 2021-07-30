import { createContext, useContext } from 'react'
import { Theme } from './theme'

export type ThemeProviderProps = {
  theme: Theme
}

export const ThemeContext = createContext<Theme | null>(null)

export function useTheme(): Theme {
  const theme = useContext(ThemeContext)

  if (theme === null) {
    throw new Error('No theme available on context')
  }

  return theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
