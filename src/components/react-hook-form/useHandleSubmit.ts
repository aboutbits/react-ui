import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
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
  'apiErrorMessage'
> & {
  isSubmitting: boolean
  triggerSubmit: UseHandleRequestTrigger<V, R>
}

/**
 * Reduces the required boilerplate code to handle a `React Hook Form` submission.
 * The success callback will be called if the request was successful, otherwise the hook will try to extract validation errors and global errors.
 */
export function useHandleSubmit<
  FV extends FieldValues,
  Response = unknown,
  Error = unknown,
>(
  { setError, clearErrors }: UseFormReturn<FV>,
  submitAction: (fieldValues: FV) => Promise<Response>,
  options?: UseHandleRequestOptions<FV, Response, Error>,
): UseHandleSubmitReturn<FV, Response> {
  const { apiErrorMessage, isRequesting, triggerRequest } = useHandleRequest<
    FV,
    Response,
    Error
  >(
    async (values) => {
      clearErrors(DEFAULT_ERROR_FIELD_PATH as Path<FV>)
      return await submitAction(values)
    },
    {
      ...options,
      onError: ({ error, apiErrorMessage, values, errorBody }) => {
        options?.onError?.({ error, apiErrorMessage, values, errorBody })
        setError(DEFAULT_ERROR_FIELD_PATH as Path<FV>, {
          type: 'custom',
          message: apiErrorMessage,
        })
        if (errorBody?.errors) {
          const errorMessages = joinFieldErrorMessages(errorBody.errors)
          Object.entries(errorMessages).forEach(([field, message]) => {
            setError(field as Path<FV>, {
              type: 'custom',
              message,
            })
          })
        }
      },
    },
  )

  return {
    apiErrorMessage,
    isSubmitting: isRequesting,
    triggerSubmit: triggerRequest,
  }
}
