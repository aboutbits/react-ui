import { createContext, useContext } from 'react'

export type Router = {
  back: () => void
}

export const defaultRouter: { back: () => void } = {
  back: () => {
    window && window.history.back()
  },
}

export const RouterContext = createContext<Router>(<Router>defaultRouter)

export function useRouter(): Router {
  return useContext(RouterContext)
}
