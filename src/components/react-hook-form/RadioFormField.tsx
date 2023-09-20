import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { RadioField, RadioFieldProps } from '../form'
import { useForwardedRef } from '../util/useForwardedRef'

export type RadioFormFieldFieldProps = Omit<RadioFieldProps, 'status'> & {
  name: string
}

/**
 * A [RadioField](../?path=/docs/components-form-radiofield--docs) within the context of a `react-hook-form` form.
 *
 * The form value that is returned for validation is of type `string`.
 */
export const RadioFormField = forwardRef<
  HTMLInputElement,
  RadioFormFieldFieldProps
>(function RadioFormField({ name, ...props }, ref) {
  const { register } = useFormContext()
  const { ref: formFieldRef, ...formFieldProps } = register(name)

  const forwardedRef = useForwardedRef(ref)

  return (
    <RadioField
      {...props}
      {...formFieldProps}
      ref={(e) => {
        formFieldRef(e)
        forwardedRef.current = e
      }}
    />
  )
})
