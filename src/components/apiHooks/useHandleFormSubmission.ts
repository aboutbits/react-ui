import axios, { AxiosError } from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'
import { joinFieldErrorMessages } from './utils'

type Options<FormValues, Response> = {
  onSuccess?: (response: Response, values: FormValues) => void
  onError?: (error: AxiosError<ErrorBody> | Error, values: FormValues) => void
  apiFallbackErrorMessageId?: string
}

export function useHandleFormSubmission<F extends FieldValues, Response>(
  { setError }: UseFormReturn<F>,
  submitAction: (body: F) => Promise<Response>,
  options?: Options<F, Response>
): {
  apiErrorMessage: string | null
  onSubmit: (values: F) => Promise<void>
} {
  const internationalization = useInternationalization()
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const isMountedRef = useRef(true)

  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const onSubmit = useCallback(
    async (values: F): Promise<void> => {
      try {
        setApiErrorMessage(null)
        const response = await submitAction(values)
        options?.onSuccess?.(response, values)
      } catch (error) {
        if (isMountedRef.current) {
          const isAxiosError = axios.isAxiosError(error)
          let apiErrorMessage = null

          if (isAxiosError) {
            const axiosError = error as AxiosError<ErrorBody>

            if (axiosError.response?.data?.errors) {
              const errors = joinFieldErrorMessages(
                axiosError.response.data.errors
              )
              Object.entries(errors).forEach(([field, error]) =>
                setError(field as Path<F>, {
                  type: 'custom',
                  message: error,
                })
              )
            }

            if (axiosError.response?.data?.message) {
              apiErrorMessage = axiosError.response?.data?.message
            }
          }

          if (apiErrorMessage === null) {
            if (options?.apiFallbackErrorMessageId) {
              apiErrorMessage = internationalization.translate(
                options.apiFallbackErrorMessageId
              )
            } else {
              apiErrorMessage =
                internationalization.translate('shared.error.api')
            }
          }

          setApiErrorMessage(apiErrorMessage)
        }

        options?.onError?.(error as AxiosError<ErrorBody> | Error, values)
      }
    },
    [internationalization, setError, options, submitAction]
  )

  return {
    apiErrorMessage,
    onSubmit,
  }
}
