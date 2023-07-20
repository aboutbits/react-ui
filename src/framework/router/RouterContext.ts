import { createContext, useContext } from 'react'

export type Router = {
  back: () => void
  replace: (path: string) => void
}

export const defaultRouter: Router = {
  back: () => {
    if (window) {
      window.history.back()
    }
  },
  replace: (path: string) => {
    if (window) {
      window.location.href = path
    }
  },
}

export const RouterContext = createContext<Router>(<Router>defaultRouter)

export function useRouter(): Router {
  return useContext(RouterContext)
}
