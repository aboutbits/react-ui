import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

export type FilterOptions = {
  /** Whether to debounce and the debounce interval in milliseconds.
   * If `true`, the debounce interval defaults to 200 ms.
   * If a positive `number`, the given debounce interval is used.
   * If otherwise, the debounce interval defaults to 0 ms.
   */
  debounce?: true | number
}

export function useFilter<TElement extends HTMLElement & { value: unknown }>() {
  return function useCurryingFilter<TValue extends TElement['value']>(
    value: TValue,
    setValue: (v: TValue) => void,
    options?: FilterOptions,
  ) {
    const debounceInterval = useMemo(() => {
      if (options?.debounce === true) {
        return 200
      }
      if (options?.debounce !== undefined && options.debounce > 0) {
        return options.debounce
      }
      return 0
    }, [options?.debounce])
    const [element, setElement] = useState<TElement | null>(null)

    const elementRef = useCallback((element: TElement | null) => {
      setElement(element)
    }, [])

    const settingNewValueRef = useRef(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
      if (element && !settingNewValueRef.current) {
        element.value = value
      }
    }, [value, element])

    const onChange = useCallback(
      (e: ChangeEvent<TElement>) => {
        settingNewValueRef.current = true

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }

        timeoutRef.current = setTimeout(() => {
          setValue(e.target.value as TValue)
          settingNewValueRef.current = false
        }, debounceInterval)
      },
      [debounceInterval, setValue],
    )

    return {
      ref: elementRef,
      onChange,
    }
  }
}
