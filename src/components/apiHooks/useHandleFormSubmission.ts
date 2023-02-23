import axios, { AxiosError } from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'
import { joinFieldErrorMessages } from './utils'

export type UseHandleFormSubmissionOptions<Values, Response> = {
  onSuccess?: (response: Response, values: Values) => void
  onError?: (error: AxiosError<ErrorBody> | Error, values: Values) => void
  apiFallbackErrorMessage?: string
}

export type UseHandleFormSubmissionOnSubmit<Values, Response> = (
  values: Values
) => UseHandleFormSubmissionOnSubmitReturnType<Response>

export type UseHandleFormSubmissionOnSubmitReturnType<Response> = Promise<
  { success: true; response: Response } | { success: false; error: unknown }
>

export function useHandleFormSubmission<Values extends FieldValues, Response>(
  { setError, clearErrors }: UseFormReturn<Values>,
  submitAction: (body: Values) => Promise<Response>,
  options?: UseHandleFormSubmissionOptions<Values, Response>
): {
  apiErrorMessage: string | null
  onSubmit: UseHandleFormSubmissionOnSubmit<Values, Response>
} {
  const { messages } = useInternationalization()
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const isMountedRef = useRef(true)

  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const onSubmit: UseHandleFormSubmissionOnSubmit<Values, Response> =
    useCallback(
      async (values) => {
        let returnValue: Awaited<
          UseHandleFormSubmissionOnSubmitReturnType<Response>
        >

        try {
          clearErrors('apiError' as Path<Values>)
          setApiErrorMessage(null)
          const response = await submitAction(values)
          options?.onSuccess?.(response, values)
          returnValue = { success: true, response }
        } catch (error) {
          if (isMountedRef.current) {
            // isAxios is not exported in version 0.27
            // eslint-disable-next-line import/no-named-as-default-member
            const isAxiosError = axios.isAxiosError(error)
            let apiErrorMessage: string | null = null

            if (isAxiosError) {
              const axiosError = error as AxiosError<ErrorBody | undefined>

              if (axiosError.response?.data?.errors) {
                const errors = joinFieldErrorMessages(
                  axiosError.response.data.errors
                )
                Object.entries(errors).forEach(([field, error]) =>
                  setError(field as Path<Values>, {
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
            setError('apiError' as Path<Values>, {
              type: 'custom',
              message: apiErrorMessage,
            })
          }

          options?.onError?.(error as AxiosError<ErrorBody> | Error, values)

          returnValue = { success: false, error }
        }

        return returnValue
      },
      [messages, setError, clearErrors, options, submitAction]
    )

  return {
    apiErrorMessage,
    onSubmit,
  }
}
