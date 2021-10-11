import { useContext } from 'react'
import merge from 'lodash.merge'
import { ThemeContext } from './theme/ThemeContext'
import { defaultTheme, OverrideTheme, Theme } from './theme/theme'
import {
  LinkComponent,
  LinkComponentContext,
} from './router/LinkComponentContext'
import { RouterContext, Router } from './router/RouterContext'
import {
  Internationalization,
  InternationalizationContext,
} from './internationalization/InternationalizationContext'

type Props = {
  /**
   * Defines a custom theme that overrides the default one.
   **/
  theme?: OverrideTheme
  /**
   * Defines a link component to be used for client side navigation.
   **/
  linkComponent?: LinkComponent
  /**
   * Defines a router.
   **/
  router?: Router
  /**
   * Defines a custom theme that overrides the default one.
   **/
  internationalization?: Internationalization
}

function mergeWithDefaultTheme(overrideTheme?: OverrideTheme): Theme {
  return merge(defaultTheme, overrideTheme)
}

export const ReactUIProvider: React.FC<Props> = ({
  theme,
  linkComponent,
  router,
  internationalization,
  children,
}) => {
  const linkComponentFromContext = useContext(LinkComponentContext)
  const routerComponentFromContext = useContext(RouterContext)
  const internationalizationFromContext = useContext(
    InternationalizationContext
  )

  return (
    <ThemeContext.Provider value={mergeWithDefaultTheme(theme)}>
      <InternationalizationContext.Provider
        value={internationalization || internationalizationFromContext}
      >
        <RouterContext.Provider value={router || routerComponentFromContext}>
          <LinkComponentContext.Provider
            value={linkComponent || linkComponentFromContext}
          >
            {children}
          </LinkComponentContext.Provider>
        </RouterContext.Provider>
      </InternationalizationContext.Provider>
    </ThemeContext.Provider>
  )
}
