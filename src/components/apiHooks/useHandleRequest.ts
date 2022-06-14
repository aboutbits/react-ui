import { AxiosError } from 'axios'
import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'

export function useHandleRequest<Response>(
  requestAction: () => Promise<Response>,
  onSuccess: () => void,
  options?: {
    apiFallbackErrorMessageId?: string
  }
): {
  apiErrorMessage: string | null
  isRequesting: boolean
  onRequest: () => Promise<void>
} {
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const internationalization = useInternationalization()

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
      } else if (options?.apiFallbackErrorMessageId) {
        setApiErrorMessage(
          internationalization.translate(options.apiFallbackErrorMessageId)
        )
      } else {
        setApiErrorMessage(internationalization.translate('shared.error.api'))
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
