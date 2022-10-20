import { AxiosError } from 'axios'
import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'

export function useHandleRequest<Response>(
  requestAction: () => Promise<Response>,
  onSuccess: () => void,
  options?: {
    apiFallbackErrorMessage?: string
  }
): {
  apiErrorMessage: string | null
  isRequesting: boolean
  onRequest: () => Promise<void>
} {
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const { messages } = useInternationalization()

  const [isRequesting, setIsRequesting] = useState<boolean>(false)

  const onRequest = async () => {
    try {
      setApiErrorMessage(null)
      setIsRequesting(true)
      await requestAction()
      onSuccess()
    } catch (error) {
      const maybeAxiosError = error as AxiosError<ErrorBody>

      if (maybeAxiosError?.response?.data.message) {
        setApiErrorMessage(maybeAxiosError?.response.data.message)
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
    isRequesting: isRequesting,
    onRequest,
  }
}
