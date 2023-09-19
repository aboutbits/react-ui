import { useDebounce } from '@aboutbits/react-toolbox'
import { ChangeEventHandler, useEffect, useMemo, useRef, useState } from 'react'

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
    const elementRef = useRef<TElement>(null)

    const settingNewValueRef = useRef(false)

    const [internalValue, setInternalValue] = useState(value)
    const debouncedInternalValue = useDebounce(internalValue, debounceInterval)
    const oldDebouncedInternalValueRef = useRef<TValue>()

    useEffect(() => {
      // Check that the debounced value is new, because `setValue` might not be reference stable and trigger this effect even though the debounced value did not change
      if (debouncedInternalValue !== oldDebouncedInternalValueRef.current) {
        oldDebouncedInternalValueRef.current = debouncedInternalValue
        setValue(debouncedInternalValue)
        settingNewValueRef.current = false
      }
    }, [debouncedInternalValue, setValue])

    useEffect(() => {
      if (elementRef.current && !settingNewValueRef.current) {
        elementRef.current.value = value
      }
    }, [value])

    const onChange: ChangeEventHandler<TElement> = (e) => {
      settingNewValueRef.current = true
      setInternalValue(e.target.value as TValue)
    }

    return {
      ref: elementRef,
      onChange,
    }
  }
}
