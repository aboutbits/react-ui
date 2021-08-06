import { createContext, useContext } from 'react'

export type Router = {
  query: Record<string, any>
  pathname: string
  back: () => void
}

const defaultRouter: { back: () => void } = {
  back: () => {
    window && window.history.back()
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  query: () => {
    window && window.location.href
  },
  pathname: () => {
    window && window.location.pathname
  },
}

export const RouterContext = createContext<Router>(<Router>defaultRouter)

export function useRouter(): Router {
  return useContext(RouterContext)
}
