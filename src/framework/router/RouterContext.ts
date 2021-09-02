import { createContext, useContext } from 'react'

export type Router = {
  back: () => void
  pathname: string
}

export const defaultRouter: { back: () => void; pathname: string } = {
  back: () => {
    window && window.history.back()
  },
  pathname: window && window.location && window.location.pathname,
}

export const RouterContext = createContext<Router>(<Router>defaultRouter)

export function useRouter(): Router {
  return useContext(RouterContext)
}
