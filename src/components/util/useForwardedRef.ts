import { ForwardedRef, useImperativeHandle, useRef } from 'react'

/**
 * @see https://stackoverflow.com/a/59947075
 */
export function useForwardedRef<T extends Element>(ref: ForwardedRef<T>) {
  const forwardedRef = useRef<T | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  useImperativeHandle(ref, () => forwardedRef.current!)
  return forwardedRef
}
