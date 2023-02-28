import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { isAxiosErrorWithErrorBody } from './utils'

export type UseHandleRequestOptions = {
  apiFallbackErrorMessage?: string
  throwOnError?: boolean
}

// Overload for when there are no parameters
export function useHandleRequest<Response>(
  requestAction: () => Promise<Response>,
  onSuccess?: (response: Response) => void,
  options?: UseHandleRequestOptions
): {
  apiErrorMessage: string | null
  isRequesting: boolean
  onRequest: () => Promise<Response | undefined>
}

// Overload for when there are parameters
export function useHandleRequest<Response, Parameters>(
  requestAction: (parameters: Parameters) => Promise<Response>,
  onSuccess?: (response: Response) => void,
  options?: UseHandleRequestOptions
): {
  apiErrorMessage: string | null
  isRequesting: boolean
  onRequest: (parameters: Parameters) => Promise<Response | undefined>
}

// Implementation
export function useHandleRequest<Response, Parameters = undefined>(
  requestAction: (parameters?: Parameters) => Promise<Response>,
  onSuccess?: (response: Response) => void,
  options?: UseHandleRequestOptions
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
      if (isAxiosErrorWithErrorBody(error) && error.response.data.message) {
        setApiErrorMessage(error.response.data.message)
      } else if (options?.apiFallbackErrorMessage) {
        setApiErrorMessage(options.apiFallbackErrorMessage)
      } else {
        setApiErrorMessage(messages['error.api'])
      }

      if (options?.throwOnError) {
        throw error
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
