import { ReactElement, useEffect, useRef } from 'react'
import { useFormikContext } from 'formik'
import { useDebounce } from '../utils/useDebounce'

export function AutoSubmit({
  interval = 200,
}: {
  interval?: number
}): ReactElement | null {
  const formik = useFormikContext()

  const initialRender = useRef<boolean>(true)
  const dataChanged = useRef<boolean>(false)
  const debouncedValueToSave = useDebounce(formik.values, interval)

  // Save whenever debounced values resolve.
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else if (debouncedValueToSave) {
      formik.submitForm()
      dataChanged.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValueToSave, formik.submitForm])

  // Make sure that the form gets submitted on unmount.
  // Here we set the variable dataChanged to true, which will be checked by the last effect on unmount.
  useEffect(() => {
    if (!isEqual(debouncedValueToSave, formik.values)) {
      dataChanged.current = true
    }
  }, [debouncedValueToSave, formik.values])

  // This effect returns only a cleanup function that will make sure that last changes are sent on unmount.
  useEffect(() => {
    return () => {
      if (dataChanged.current) {
        formik.submitForm()
      }
    }
    // We want to run this function only once, when the component unmounts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.submitForm])

  return null
}

const isEqual = (a: unknown, b: unknown) => {
  return JSON.stringify(a) === JSON.stringify(b)
}
