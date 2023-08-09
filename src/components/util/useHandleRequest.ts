import { useCallback, useState } from 'react'
import { useIsMounted } from '@aboutbits/react-toolbox'
import { useInternationalization } from '../../framework'
import { isAxiosErrorWithErrorBody } from './helpers'
import { ErrorBody } from './types'

export const DEFAULT_ERROR_MESSAGE_PATH = 'error.api'

export type UseHandleRequestOptions<V, R, E> = {
  onSuccess?: ({
    response,
    values,
  }: {
    response: R
    values: V
  }) => void | Promise<void>
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
  }) => void | Promise<void>
  apiFallbackErrorMessage?: string
  throwOnError?: boolean
}

export type UseHandleRequestTrigger<V, R> = (
  values: V,
) => Promise<R | undefined>

export type UseHandleRequestReturn<V, R> = {
  apiErrorMessage: string | undefined
  isRequesting: boolean
  triggerRequest: UseHandleRequestTrigger<V, R>
  clearApiErrorMessage: () => void
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
  const [apiErrorMessage, setApiErrorMessage] = useState<string>()
  const { messages } = useInternationalization()
  const isMounted = useIsMounted()

  const clearApiErrorMessage = useCallback(() => {
    setApiErrorMessage(undefined)
  }, [])

  const triggerRequest: UseHandleRequestTrigger<Values, Response> = useCallback(
    async (values) => {
      try {
        setApiErrorMessage(undefined)
        setIsRequesting(true)
        const response = await requestAction(values)
        if (isMounted()) {
          await options?.onSuccess?.({ response, values })
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
          await options?.onError?.({
            error: error as Error,
            apiErrorMessage,
            values,
            errorBody,
          })
          if (options?.throwOnError) {
            throw error
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
    clearApiErrorMessage,
    isRequesting,
    triggerRequest,
  }
}
