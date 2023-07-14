import { createContext, useContext } from 'react'
import { defaultMessages } from './defaultMessages.en'

type MessageKey = string

export type InternationalizationMessages = Record<MessageKey, string>

export type Internationalization = {
  messages: InternationalizationMessages
}

export const defaultInternationalization = {
  messages: defaultMessages,
}

export const InternationalizationContext = createContext<Internationalization>(
  defaultInternationalization
)

export function useInternationalization() {
  const { messages } = useContext(InternationalizationContext)
  return {
    formatMessage: (key: MessageKey) => {
      const message = messages[key]
      if (message) {
        return message
      }
      console.warn(`Missing React UI translation for key '${key}'`)
      return key
    },
  }
}
