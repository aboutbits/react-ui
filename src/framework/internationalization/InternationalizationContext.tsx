import { createContext, useContext } from 'react'
import { defaultMessages } from './defaultMessages.en'

export type InternationalizationMessages = Record<string, string>

export type Internationalization = {
  messages: InternationalizationMessages
}

export const defaultInternationalization = {
  messages: defaultMessages,
} satisfies Internationalization

export const InternationalizationContext = createContext<
  typeof defaultInternationalization & Internationalization
>(defaultInternationalization)

export function useInternationalization() {
  return useContext(InternationalizationContext)
}
