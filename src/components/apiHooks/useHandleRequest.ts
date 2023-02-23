import { AxiosError } from 'axios'
import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'

export type UseHandleRequestReturnType<Response> = Promise<
  { success: true; response: Response } | { success: false; error: unknown }
>

// Overload for when there are no parameters
export function useHandleRequest<Response>(
  requestAction: () => Promise<Response>,
  onSuccess?: (response: Response) => void,
  options?: {
    apiFallbackErrorMessage?: string
  }
): {
  apiErrorMessage: string | null
  isRequesting: boolean
  onRequest: () => UseHandleRequestReturnType<Response>
}

// Overload for when there are parameters
export function useHandleRequest<Response, Parameters>(
  requestAction: (parameters: Parameters) => Promise<Response>,
  onSuccess?: (response: Response) => void,
  options?: {
    apiFallbackErrorMessage?: string
  }
): {
  apiErrorMessage: string | null
  isRequesting: boolean
  onRequest: (parameters: Parameters) => UseHandleRequestReturnType<Response>
}

// Implementation
export function useHandleRequest<Response, Parameters = undefined>(
  requestAction: (parameters?: Parameters) => Promise<Response>,
  onSuccess?: (response: Response) => void,
  options?: {
    apiFallbackErrorMessage?: string
  }
): {
  apiErrorMessage: string | null
  isRequesting: boolean
  onRequest: (parameters?: Parameters) => UseHandleRequestReturnType<Response>
} {
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const { messages } = useInternationalization()

  const [isRequesting, setIsRequesting] = useState<boolean>(false)

  const onRequest = async (parameters?: Parameters) => {
    let returnValue: Awaited<UseHandleRequestReturnType<Response>>

    try {
      setApiErrorMessage(null)
      setIsRequesting(true)
      const response = await requestAction(parameters)
      onSuccess?.(response)
      returnValue = { success: true, response }
    } catch (error) {
      const maybeAxiosError = error as AxiosError<ErrorBody | undefined>

      if (maybeAxiosError?.response?.data?.message) {
        setApiErrorMessage(maybeAxiosError.response.data.message)
      } else if (options?.apiFallbackErrorMessage) {
        setApiErrorMessage(options.apiFallbackErrorMessage)
      } else {
        setApiErrorMessage(messages['error.api'])
      }

      returnValue = { success: false, error }
    } finally {
      setIsRequesting(false)
    }

    return returnValue
  }

  return {
    apiErrorMessage,
    isRequesting,
    onRequest,
  }
}
