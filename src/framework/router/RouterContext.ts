import { createContext, useContext } from 'react'

export type Router = {
  back: () => void
  replace: (path: string) => void
}

export const defaultRouter: Router = {
  back: () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  },
  replace: (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path
    }
  },
}

export const RouterContext = createContext<Router>(defaultRouter)

export function useRouter(): Router {
  return useContext(RouterContext)
}
