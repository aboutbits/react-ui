import { useCallback, useState } from 'react'
import { useInternationalization } from '../../framework'
import { isAxiosErrorWithErrorBody } from './helpers'
import { ErrorBody } from './types'
import { useIsMounted } from './useIsMounted'

export const DEFAULT_ERROR_MESSAGE_PATH = 'error.api'

export type UseHandleRequestOptions<V, R, E> = {
  onSuccess?: ({ response, values }: { response: R; values: V }) => void
  onError?: ({
    error,
    apiErrorMessage,
    values,
    errorBody,
  }: {
    error: E
    apiErrorMessage: string
    values: V
    errorBody: ErrorBody | undefined
  }) => void
  apiFallbackErrorMessage?: string
  throwOnError?: boolean
}

export type UseHandleRequestTrigger<V, R> = (
  values: V,
) => Promise<R | undefined>

export type UseHandleRequestReturn<V, R> = {
  apiErrorMessage: string | null
  isRequesting: boolean
  triggerRequest: UseHandleRequestTrigger<V, R>
}

export function useHandleRequest<
  Values = void,
  Response = unknown,
  Error = unknown,
>(
  requestAction: (values: Values) => Promise<Response>,
  options?: UseHandleRequestOptions<Values, Response, Error>,
): UseHandleRequestReturn<Values, Response> {
  const [isRequesting, setIsRequesting] = useState(false)
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const { messages } = useInternationalization()
  const isMounted = useIsMounted()

  const triggerRequest: UseHandleRequestTrigger<Values, Response> = useCallback(
    async (values) => {
      try {
        setApiErrorMessage(null)
        setIsRequesting(true)
        const response = await requestAction(values)
        if (isMounted()) {
          options?.onSuccess?.({ response, values })
        }
        return response
      } catch (error) {
        const errorBody = isAxiosErrorWithErrorBody(error)
          ? error.response.data
          : undefined
        const apiErrorMessage =
          errorBody?.message ??
          options?.apiFallbackErrorMessage ??
          messages[DEFAULT_ERROR_MESSAGE_PATH]
        setApiErrorMessage(apiErrorMessage)
        if (isMounted()) {
          options?.onError?.({
            error: error as Error,
            apiErrorMessage,
            values,
            errorBody,
          })
          if (options?.throwOnError) {
            throw error as Error
          }
        }
        return undefined
      } finally {
        setIsRequesting(false)
      }
    },
    [messages, options, requestAction, isMounted],
  )

  return {
    apiErrorMessage,
    isRequesting,
    triggerRequest,
  }
}
