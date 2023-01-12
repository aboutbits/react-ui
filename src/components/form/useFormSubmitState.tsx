import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDelayedState } from '../utils/useDelayedState'

export function useFormSubmitState(successDelay = 2000) {
  const {
    formState: { isSubmitting, isSubmitSuccessful },
  } = useFormContext()

  const [isSubmitted, setIsSubmitted] = useDelayedState(false)

  useEffect(() => {
    if (!isSubmitting) {
      if (isSubmitSuccessful) {
        setIsSubmitted(true, successDelay)
      } else {
        setIsSubmitted(false)
      }
    }
  }, [isSubmitting, isSubmitSuccessful, successDelay, setIsSubmitted])

  return { isSubmitted, isSubmitting }
}
