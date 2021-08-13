import { createContext, useContext } from 'react'

export type Internationalization = {
  translate: (key: string, values?: unknown) => string
}

const defaultInternationalization: Internationalization = {
  translate: (key) => key,
}

export const InternationalizationContext = createContext<Internationalization>(
  defaultInternationalization
)

export function useInternationalization(): Internationalization {
  return useContext(InternationalizationContext)
}
