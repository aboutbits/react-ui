import { createContext } from 'react'
import { DialogSize } from './Dialog'

type DialogContextType = {
  size: DialogSize
}

const initialContext = {
  size: DialogSize.md,
}

export const DialogContext = createContext<DialogContextType>(initialContext)
