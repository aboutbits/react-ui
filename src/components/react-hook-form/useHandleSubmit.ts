import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { useCallback } from 'react'
import {
  joinFieldErrorMessages,
  useHandleRequest,
  UseHandleRequestOptions,
  UseHandleRequestReturn,
  UseHandleRequestTrigger,
} from '../util'

const DEFAULT_ERROR_FIELD_PATH = 'apiError'

export type UseHandleSubmitReturn<V, R> = Pick<
  UseHandleRequestReturn<V, R>,
  'apiErrorMessage' | 'clearApiErrorMessage'
> & {
  isSubmitting: boolean
  triggerSubmit: UseHandleRequestTrigger<V, R>
}

/**
 * Reduces the required boilerplate code to handle a `React Hook Form` submission.
 * The success callback will be called if the request was successful, otherwise the hook will try to extract validation errors and global errors.
 */
export function useHandleSubmit<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
  TActualFieldValues = TTransformedValues extends FieldValues
    ? TTransformedValues
    : TFieldValues,
  Response = unknown,
  Error = unknown,
>(
  {
    setError,
    clearErrors,
  }: UseFormReturn<TFieldValues, TContext, TTransformedValues>,
  submitAction: (fieldValues: TActualFieldValues) => Promise<Response>,

  options?: UseHandleRequestOptions<TActualFieldValues, Response, Error>,
): UseHandleSubmitReturn<TActualFieldValues, Response> {
  const {
    apiErrorMessage,
    clearApiErrorMessage,
    isRequesting,
    triggerRequest,
  } = useHandleRequest<TActualFieldValues, Response, Error>(
    async (values) => {
      clearErrors(DEFAULT_ERROR_FIELD_PATH as Path<TFieldValues>)
      return await submitAction(values)
    },
    {
      ...options,
      onError: async ({ error, apiErrorMessage, values, errorBody }) => {
        await options?.onError?.({ error, apiErrorMessage, values, errorBody })
        setError(DEFAULT_ERROR_FIELD_PATH as Path<TFieldValues>, {
          type: 'custom',
          message: apiErrorMessage,
        })
        if (errorBody?.errors) {
          const errorMessages = joinFieldErrorMessages(errorBody.errors)
          Object.entries(errorMessages).forEach(([field, message]) => {
            setError(field as Path<TFieldValues>, {
              type: 'custom',
              message,
            })
          })
        }
      },
    },
  )

  const clearError = useCallback(() => {
    clearErrors(DEFAULT_ERROR_FIELD_PATH as Path<TFieldValues>)
    clearApiErrorMessage()
  }, [clearApiErrorMessage, clearErrors])

  return {
    apiErrorMessage,
    clearApiErrorMessage: clearError,
    isSubmitting: isRequesting,
    triggerSubmit: triggerRequest,
  }
}
