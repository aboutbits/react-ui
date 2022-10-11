import { ForwardedRef, useImperativeHandle, useRef } from 'react'

/**
 * @see https://stackoverflow.com/a/59947075
 */
export function useForwardedRef<T extends Element>(ref: ForwardedRef<T>) {
  const forwardedRef = useRef<T | null>(null)
  useImperativeHandle(ref, () => forwardedRef.current as T)
  return forwardedRef
}
