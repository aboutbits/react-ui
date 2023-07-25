import { createContext, useContext } from 'react'
import { defaultMessages } from './defaultMessages.en'

export type InternationalizationMessages = typeof defaultMessages

export type Internationalization<
  TMessages extends
    Partial<InternationalizationMessages> = InternationalizationMessages,
> = {
  messages: TMessages
}

export const defaultInternationalization: Internationalization = {
  messages: defaultMessages,
}

export const InternationalizationContext = createContext<Internationalization>(
  defaultInternationalization,
)

export function useInternationalization() {
  return useContext(InternationalizationContext)
}
