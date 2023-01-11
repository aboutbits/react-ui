import { ForwardedRef, forwardRef } from 'react'
import { Control, useFormState } from 'react-hook-form'
import { Button, ButtonProps } from './Button'

export type SubmitButtonProps = ButtonProps & {
  formControl?: Control
}

function SubmitButtonComponent(
  { children, disabled = false, formControl, ...props }: SubmitButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { isSubmitting } = useFormState({ control: formControl })

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
