import { ReactNode, useContext, useMemo } from 'react'
import {
  Internationalization,
  InternationalizationContext,
  InternationalizationMessages,
} from './internationalization/InternationalizationContext'
import {
  LinkComponent,
  LinkComponentContext,
} from './router/LinkComponentContext'
import { Router, RouterContext } from './router/RouterContext'
import { Theme } from './theme/theme'
import { ThemeContext } from './theme/ThemeContext'

export type ReactUIProviderProps = {
  theme?: Theme
  linkComponent?: LinkComponent
  router?: Router
  internationalization?: Internationalization<
    Partial<InternationalizationMessages> & Record<string, string>
  >
  children?: ReactNode
}

export function ReactUIProvider({
  theme,
  linkComponent,
  router,
  internationalization,
  children,
}: ReactUIProviderProps) {
  const linkComponentFromContext = useContext(LinkComponentContext)
  const routerComponentFromContext = useContext(RouterContext)
  const internationalizationFromContext = useContext(
    InternationalizationContext,
  )
  const mergedInternationalization = useMemo(() => {
    if (internationalization) {
      return {
        ...internationalizationFromContext,
        ...internationalization,
        messages: {
          ...internationalizationFromContext.messages,
          ...internationalization.messages,
        },
      }
    }
    return internationalizationFromContext
  }, [internationalization, internationalizationFromContext])

  return (
    <ThemeContext.Provider value={theme}>
      <InternationalizationContext.Provider value={mergedInternationalization}>
        <RouterContext.Provider value={router ?? routerComponentFromContext}>
          <LinkComponentContext.Provider
            value={linkComponent ?? linkComponentFromContext}
          >
            {children}
          </LinkComponentContext.Provider>
        </RouterContext.Provider>
      </InternationalizationContext.Provider>
    </ThemeContext.Provider>
  )
}
