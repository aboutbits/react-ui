import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDelayedState } from '../utils/useDelayedState'

export function useFormSubmitState(successDelay = 2000) {
  const {
    formState: {
      isSubmitting: formIsSubmitting,
      isSubmitSuccessful: formIsSubmitSuccessful,
    },
  } = useFormContext()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useDelayedState(false)

  useEffect(() => {
    setIsSubmitting(formIsSubmitting)
  }, [formIsSubmitting])

  useEffect(() => {
    if (isSubmitting && formIsSubmitSuccessful) {
      setIsSubmitting(false)
      setIsSubmitted(true, successDelay)
    }
  }, [
    isSubmitting,
    formIsSubmitting,
    formIsSubmitSuccessful,
    setIsSubmitted,
    successDelay,
  ])

  return { isSubmitted, isSubmitting }
}
