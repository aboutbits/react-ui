import { useRef, useState } from 'react'

export function useDelayedState<State>(
  readyState: State
): [State, (status: State, duration?: number) => void] {
  const [state, setState] = useState<State>(readyState)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  function setDelayedState(status: State, duration = 0) {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    if (duration > 0) {
      timeoutRef.current = setTimeout(() => {
        setState(readyState)
      }, duration)
    }

    setState(status)
  }

  return [state, setDelayedState]
}
