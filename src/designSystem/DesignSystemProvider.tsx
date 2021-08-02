import { useContext } from 'react'
import { ThemeContext } from './theme/ThemeContext'
import { Theme } from './theme/theme'
import {
  LinkComponent,
  LinkComponentContext,
} from './link/LinkComponentContext'

type Props = {
  theme: Theme
  linkComponent?: LinkComponent
}

export const DesignSystemProvider: React.FC<Props> = ({
  theme,
  linkComponent,
  children,
}) => {
  const linkComponentFromContext = useContext(LinkComponentContext)

  return (
    <ThemeContext.Provider value={theme}>
      <LinkComponentContext.Provider
        value={linkComponent || linkComponentFromContext}
      >
        {children}
      </LinkComponentContext.Provider>
    </ThemeContext.Provider>
  )
}
