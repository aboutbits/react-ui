import { AxiosError, isAxiosError } from 'axios'
import { ErrorBody } from './types'

export function joinFieldErrorMessages(
  errors: Record<string, string[] | null>,
): Record<string, string> {
  if (!errors && typeof errors !== 'object') {
    return {}
  }

  return Object.keys(errors).reduce<Record<string, string>>((acc, key) => {
    const fieldErrors = errors[key]

    if (Array.isArray(fieldErrors)) {
      acc[key] = fieldErrors.join(', ')
    }

    return acc
  }, {})
}

export function isAxiosErrorWithErrorBody(
  error: unknown,
): error is Omit<AxiosError<ErrorBody>, 'response'> &
  Required<Pick<AxiosError<ErrorBody>, 'response'>> {
  return (
    isAxiosError(error) &&
    typeof error.response?.data === 'object' &&
    error.response.data !== null
  )
}
