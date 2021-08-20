import { AxiosError } from 'axios'
import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { ErrorBody } from './types'

export function useDeletion<Response>(
  deleteAction: () => Promise<Response>,
  onSuccess: () => void,
  options?: {
    apiFallbackErrorMessageId?: string
  }
): {
  apiErrorMessage: string | null
  isDeleting: boolean
  onDelete: () => Promise<void>
} {
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)
  const internationalization = useInternationalization()

  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const onDelete = async () => {
    try {
      setApiErrorMessage(null)
      setIsDeleting(true)
      await deleteAction()
      onSuccess()
    } catch (error) {
      const maybeAxiosError: AxiosError<ErrorBody> = error
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
      setIsDeleting(false)
    }
  }

  return {
    apiErrorMessage,
    isDeleting,
    onDelete,
  }
}
