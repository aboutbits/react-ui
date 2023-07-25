import { useCallback, useRef, useState } from 'react'

export function useDelayedState<State>(
  readyState: State,
): [State, (status: State, duration?: number) => void] {
  const readyStateRef = useRef<State>(readyState)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [state, setState] = useState<State>(readyStateRef.current)

  const setDelayedState = useCallback((status: State, duration = 0) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    if (duration > 0) {
      timeoutRef.current = setTimeout(() => {
        setState(readyStateRef.current)
      }, duration)
    }

    setState(status)
  }, [])

  return [state, setDelayedState]
}
