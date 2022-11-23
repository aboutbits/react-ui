import axios, { AxiosError } from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'
import { joinFieldErrorMessages } from './utils'

type Options<FormValues, Response> = {
  onSuccess?: (response: Response, values: FormValues) => void
  onError?: (error: AxiosError<ErrorBody> | Error, values: FormValues) => void
  apiFallbackErrorMessage?: string
}

export function useHandleFormSubmission<F extends FieldValues, Response>(
  { setError, clearErrors }: UseFormReturn<F>,
  submitAction: (body: F) => Promise<Response>,
  options?: Options<F, Response>
): {
  apiErrorMessage: string | null
  onSubmit: (values: F) => Promise<void>
} {
  const { messages } = useInternationalization()
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
        clearErrors('apiError' as Path<F>)
        setApiErrorMessage(null)
        const response = await submitAction(values)
        options?.onSuccess?.(response, values)
      } catch (error) {
        if (isMountedRef.current) {
          // isAxios is not exported in version 0.27
          // eslint-disable-next-line import/no-named-as-default-member
          const isAxiosError = axios.isAxiosError(error)
          let apiErrorMessage: string | null = null

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
            apiErrorMessage =
              options?.apiFallbackErrorMessage ?? messages['error.api']
          }

          setApiErrorMessage(apiErrorMessage)
          setError('apiError' as Path<F>, {
            type: 'custom',
            message: apiErrorMessage,
          })
        }

        options?.onError?.(error as AxiosError<ErrorBody> | Error, values)
      }
    },
    [messages, setError, clearErrors, options, submitAction]
  )

  return {
    apiErrorMessage,
    onSubmit,
  }
}
