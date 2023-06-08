import { useMemo } from 'react'

let counter = 0

export const useId = (id?: string) =>
  useMemo(() => {
    return id || `reactui-${++counter}`
  }, [id])
