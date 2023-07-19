import { createContext, useContext } from 'react'

export type Router = {
  back: () => void
  push: (path: string) => void
}

export const defaultRouter: Router = {
  back: () => {
    window && window.history.back()
  },
  push: (path: string) => {
    window && window.history.pushState({}, '', path)
  },
}

export const RouterContext = createContext<Router>(<Router>defaultRouter)

export function useRouter(): Router {
  return useContext(RouterContext)
}
