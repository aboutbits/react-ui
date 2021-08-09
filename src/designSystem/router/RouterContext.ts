import { createContext, useContext } from 'react'

export type Router = {
  back: () => void
}

const defaultRouter: Router = {
  back: () => {
    window && window.history.back()
  },
}

export const RouterContext = createContext<Router>(defaultRouter)

export function useRouter(): Router {
  return useContext(RouterContext)
}
