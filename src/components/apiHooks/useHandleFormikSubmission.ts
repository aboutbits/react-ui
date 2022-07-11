import axios, { AxiosError } from 'axios'
import type { FormikHelpers } from 'formik/dist/types'
import { useState } from 'react'

import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'
import { joinFieldErrorMessages } from './utils'

type Options<FormValues, Response> = {
  onSuccess?: (response: Response, values: FormValues) => void
  onError?: (error: AxiosError<ErrorBody> | Error, values: FormValues) => void
  apiFallbackErrorMessageId?: string
}

export function useHandleFormikSubmission<FormValues, Response>(
  submitAction: (body: FormValues) => Promise<Response>,
  options?: Options<FormValues, Response>
): {
  apiErrorMessage: string | null
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => Promise<void>
} {
  const internationalization = useInternationalization()
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)

  const onSubmit = async (
    values: FormValues,
    { setSubmitting, setErrors }: FormikHelpers<FormValues>
  ): Promise<void> => {
    try {
      setApiErrorMessage(null)
      setSubmitting(true)
      const response = await submitAction(values)
      options?.onSuccess?.(response, values)
    } catch (error) {
      const maybeAxiosError = error as AxiosError<ErrorBody> | Error
      const isAxiosError = axios.isAxiosError(maybeAxiosError)

      if (isAxiosError && maybeAxiosError.response?.data?.errors) {
        setErrors(joinFieldErrorMessages(maybeAxiosError.response.data.errors))
      }

      if (isAxiosError && maybeAxiosError.response?.data?.message) {
        setApiErrorMessage(maybeAxiosError.response.data.message)
      } else if (options?.apiFallbackErrorMessageId) {
        setApiErrorMessage(
          internationalization.translate(options.apiFallbackErrorMessageId)
        )
      } else {
        setApiErrorMessage(internationalization.translate('shared.error.api'))
      }

      options?.onError?.(maybeAxiosError, values)
    } finally {
      setSubmitting(false)
    }
  }

  return {
    apiErrorMessage,
    onSubmit,
  }
}
