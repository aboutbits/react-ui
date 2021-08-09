import { useContext } from 'react'
import { ThemeContext } from './theme/ThemeContext'
import { Theme } from './theme/theme'
import {
  LinkComponent,
  LinkComponentContext,
} from './router/LinkComponentContext'
import { RouterContext, Router, useRouter } from './router/RouterContext'

type Props = {
  theme: Theme
  linkComponent?: LinkComponent
  router?: Router
}

export const DesignSystemProvider: React.FC<Props> = ({
  theme,
  linkComponent,
  router,
  children,
}) => {
  const linkComponentFromContext = useContext(LinkComponentContext)
  const routerComponentFromContext = useRouter()

  return (
    <ThemeContext.Provider value={theme}>
      <RouterContext.Provider value={router || routerComponentFromContext}>
        <LinkComponentContext.Provider
          value={linkComponent || linkComponentFromContext}
        >
          {children}
        </LinkComponentContext.Provider>
      </RouterContext.Provider>
    </ThemeContext.Provider>
  )
}
