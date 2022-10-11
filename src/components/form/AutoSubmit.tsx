import { ReactElement, useEffect, useRef } from 'react'
import { useWatch } from 'react-hook-form'
import { useDebounce } from '../utils/useDebounce'

export function AutoSubmit({
  interval = 200,
}: {
  interval?: number
}): ReactElement {
  const values = useWatch()

  const formInput = useRef<HTMLInputElement | null>(null)

  const initialRender = useRef<boolean>(true)
  const dataChanged = useRef<boolean>(false)
  const debouncedValueToSave = useDebounce(values, interval)

  // Save whenever debounced values resolve.
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else if (debouncedValueToSave) {
      formInput.current?.form?.requestSubmit()
      dataChanged.current = false
    }
  }, [debouncedValueToSave])

  // Make sure that the form gets submitted on unmount.
  // Here we set the variable dataChanged to true, which will be checked by the last effect on unmount.
  useEffect(() => {
    if (!isEqual(debouncedValueToSave, values)) {
      dataChanged.current = true
    }
  }, [debouncedValueToSave, values])

  // This effect returns only a cleanup function that will make sure that last changes are sent on unmount.
  useEffect(() => {
    const formInputCurrent = formInput.current

    return () => {
      if (dataChanged.current) {
        formInputCurrent?.form?.requestSubmit()
      }
    }
    // We want to run this function only once, when the component unmounts.
  }, [])

  return <input type="hidden" ref={formInput} />
}

const isEqual = (a: unknown, b: unknown) => {
  return JSON.stringify(a) === JSON.stringify(b)
}
