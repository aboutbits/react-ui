import { createContext, useContext } from 'react'

export type Router = {
  back: () => void
  asPath: string
}

const defaultRouter: Router = {
  back: () => {
    window && window.history.back()
  },
  asPath: window && window.location.href,
}

export const RouterContext = createContext<Router>(defaultRouter)

export function useRouter(): Router {
  return useContext(RouterContext)
}
