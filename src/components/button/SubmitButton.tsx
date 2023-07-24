import { ForwardedRef, forwardRef } from 'react'
import { Control, FieldValues, useFormState } from 'react-hook-form'
import { Button, ButtonProps } from './Button'

export type SubmitButtonProps<F extends FieldValues> = ButtonProps & {
  formControl?: Control<F>
}

function SubmitButtonComponent<F extends FieldValues>(
  { children, disabled = false, formControl, ...props }: SubmitButtonProps<F>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { isSubmitting } = useFormState<F>({ control: formControl })

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

// Type assertion required for a component with forwarded ref and generic type
export const SubmitButton = forwardRef(SubmitButtonComponent) as <
  F extends FieldValues,
>(
  props: SubmitButtonProps<F> & { ref?: ForwardedRef<HTMLButtonElement> },
) => ReturnType<typeof SubmitButtonComponent>
