import { FormikErrors } from 'formik'
import set from 'lodash.set'

export function joinFieldErrorMessages<Values>(errors: {
  [key: string]: string[] | null
}): FormikErrors<Values> {
  if (!errors && typeof errors !== 'object') {
    return {}
  }

  return Object.keys(errors).reduce((acc, key) => {
    if (Array.isArray(errors[key])) {
      if (errors[key] !== null) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const errorString = errors[key].join(', ')
        set(acc, key, errorString)
      }
    }
    return acc
  }, {})
}
