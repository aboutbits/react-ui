import { AxiosError } from 'axios'
import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'

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
  onRequest: () => Promise<Response | undefined>
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
  onRequest: (parameters: Parameters) => Promise<Response | undefined>
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
  onRequest: (parameters?: Parameters) => Promise<Response | undefined>
} {
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const { messages } = useInternationalization()

  const [isRequesting, setIsRequesting] = useState<boolean>(false)

  const onRequest = async (parameters?: Parameters) => {
    try {
      setApiErrorMessage(null)
      setIsRequesting(true)
      const response = await requestAction(parameters)
      onSuccess?.(response)
      return response
    } catch (error) {
      const maybeAxiosError = error as AxiosError<ErrorBody | undefined>

      if (maybeAxiosError?.response?.data?.message) {
        setApiErrorMessage(maybeAxiosError.response.data.message)
      } else if (options?.apiFallbackErrorMessage) {
        setApiErrorMessage(options.apiFallbackErrorMessage)
      } else {
        setApiErrorMessage(messages['error.api'])
      }
    } finally {
      setIsRequesting(false)
    }
  }

  return {
    apiErrorMessage,
    isRequesting,
    onRequest,
  }
}
