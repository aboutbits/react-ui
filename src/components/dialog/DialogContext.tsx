import { createContext } from 'react'
import { DialogSize } from './types'

type DialogContextType = {
  size: DialogSize
}

const initialContext = {
  size: DialogSize.Md,
}

export const DialogContext = createContext<DialogContextType>(initialContext)
