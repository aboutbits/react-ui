import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { RadioField, RadioFieldProps, Status } from '../form'
import { useForwardedRef } from '../util/useForwardedRef'
import { useFieldError } from './util/useFieldError'

export type RadioFormFieldFieldProps = Omit<RadioFieldProps, 'status'> & {
  name: string
}

/**
 * A [RadioField](../?path=/docs/components-form-radiofield--default-story) within the context of a `react-hook-form` form.
 *
 * The form value that is returned for validation is of type `string`.
 */
export const RadioFormField = forwardRef<
  HTMLInputElement,
  RadioFormFieldFieldProps
>(function RadioFormField({ mode, name, message, ...props }, ref) {
  const { register } = useFormContext()
  const { ref: formFieldRef, ...formFieldProps } = register(name)

  const error = useFieldError(name)
  const forwardedRef = useForwardedRef(ref)

  return (
    <RadioField
      mode={mode}
      {...props}
      {...formFieldProps}
      ref={(e) => {
        formFieldRef(e)
        forwardedRef.current = e
      }}
      message={error?.message ?? message}
      status={error ? Status.invalid : undefined}
    />
  )
})
