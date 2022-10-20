import { createContext, useContext } from 'react'
import defaultMessages from './defaultMessages.en'

export type InternationalizationMessages = Record<string, string>

export type Internationalization = {
  messages: InternationalizationMessages
}

export const defaultInternationalization: Internationalization = {
  messages: defaultMessages,
}

export const InternationalizationContext = createContext<Internationalization>(
  defaultInternationalization
)

export function useInternationalization(): Internationalization {
  return useContext(InternationalizationContext)
}
