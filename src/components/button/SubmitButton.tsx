import { ForwardedRef, forwardRef } from 'react'
import { useFormState } from 'react-hook-form'
import { Button, ButtonProps } from './Button'

export type SubmitButtonProps = ButtonProps

function SubmitButtonComponent(
  { children, disabled = false, ...props }: SubmitButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { isSubmitting } = useFormState()

  return (
    <Button
      type="submit"
      disabled={isSubmitting || disabled}
      {...props}
      ref={ref}
    >
      {children}
    </Button>
  )
}

export const SubmitButton = forwardRef(SubmitButtonComponent)
