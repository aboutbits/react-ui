import { useEffect } from 'react'
import { useFormikContext } from 'formik'

export function FormikAutoSubmit(): null {
  const formik = useFormikContext()

  useEffect(() => {
    if (formik.isValid && formik.dirty && !formik.isSubmitting) {
      formik.submitForm()
    }
    // eslint-disable-next-line
  }, [formik.values])

  return null
}
