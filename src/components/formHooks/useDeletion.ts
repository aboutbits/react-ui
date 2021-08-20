import { AxiosError } from 'axios'
import { useState } from 'react'
import { ErrorBody } from './types'

export function useDeletion<Response>(
  deleteFun: () => Promise<Response>,
  onSuccess: () => void
): {
  apiErrorMessage: string | null
  isDeleting: boolean
  onDelete: () => Promise<void>
} {
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null)

  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const onDelete = async () => {
    try {
      setApiErrorMessage(null)
      setIsDeleting(true)
      await deleteFun()
      onSuccess()
    } catch (error) {
      const { response }: AxiosError<ErrorBody> = error
      if (response?.data.message) {
        setApiErrorMessage(response.data.message)
      } else if (typeof error === 'string') {
        setApiErrorMessage(error)
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
