import { useCallback, useState } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { useInternationalization } from '../../framework'
import { useIsMounted } from './useIsMounted'
import { isAxiosErrorWithErrorBody, joinFieldErrorMessages } from './utils'

export type UseHandleFormSubmissionOptions<Values, Response, Error> = {
  onSuccess?: (response: Response, values: Values) => void
  onError?: (error: Error, values: Values) => void
  apiFallbackErrorMessage?: string
  throwOnError?: boolean
}

export type UseHandleFormSubmissionOnSubmit<Values, Response> = (
  values: Values
) => Promise<Response | undefined>

export function useHandleFormSubmission<
  Values extends FieldValues,
  Response,
  Error = unknown
>(
  { setError, clearErrors }: UseFormReturn<Values>,
  submitAction: (body: Values) => Promise<Response>,
  options?: UseHandleFormSubmissionOptions<Values, Response, Error>
): {
  apiErrorMessage: string | null
  onSubmit: UseHandleFormSubmissionOnSubmit<Values, Response>
  clearError: () => void
} {
  const { messages } = useInternationalization()
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const clearError = useCallback(() => {
    clearErrors('apiError' as Path<Values>)
    setApiErrorMessage(null)
  }, [clearErrors])
  const isMounted = useIsMounted()

  const onSubmit: UseHandleFormSubmissionOnSubmit<Values, Response> =
    useCallback(
      async (values) => {
        try {
          clearError()
          const response = await submitAction(values)
          options?.onSuccess?.(response, values)
          return response
        } catch (error) {
          if (isMounted()) {
            let apiErrorMessage: string | null = null

            if (isAxiosErrorWithErrorBody(error)) {
              if (error.response.data.errors) {
                const errors = joinFieldErrorMessages(
                  error.response.data.errors
                )
                Object.entries(errors).forEach(([field, error]) =>
                  setError(field as Path<Values>, {
                    type: 'custom',
                    message: error,
                  })
                )
              }

              if (error.response.data.message) {
                apiErrorMessage = error.response?.data?.message
              }
            }

            if (apiErrorMessage === null) {
              apiErrorMessage =
                options?.apiFallbackErrorMessage ?? messages['error.api']
            }

            setApiErrorMessage(apiErrorMessage)
            setError('apiError' as Path<Values>, {
              type: 'custom',
              message: apiErrorMessage,
            })
          }

          options?.onError?.(error as Error, values)

          if (options?.throwOnError) {
            throw error as Error
          }
        }
      },
      [messages, setError, clearError, options, submitAction, isMounted]
    )

  return {
    apiErrorMessage,
    onSubmit,
    clearError,
  }
}
