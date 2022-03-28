import { useContext } from 'react'
import mergeWith from 'lodash.mergewith'
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
  theme?: OverrideTheme
  linkComponent?: LinkComponent
  router?: Router
  internationalization?: Internationalization
}

function mergeWithDefaultTheme(overrideTheme?: OverrideTheme): Theme {
  return mergeWith({}, defaultTheme, overrideTheme, (value, srcValue) => {
    if (typeof value === 'string' && typeof srcValue === 'string') {
      return `${value} ${srcValue}`
    }
  })
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
