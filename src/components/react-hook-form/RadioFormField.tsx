import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Radio, RadioProps } from '../form'
import { useForwardedRef } from '../util/useForwardedRef'

export type RadioFormFieldFieldProps = RadioProps & {
  name: string
}

/**
 * A [Radio](../?path=/docs/components-form-primitives-radio--docs) within the context of a `react-hook-form` form.
 *
 * The form value that is returned for validation is of type `string`.
 */
export const RadioFormField = forwardRef<
  HTMLInputElement,
  RadioFormFieldFieldProps
>(function RadioFormField({ mode, name, ...props }, ref) {
  const { register } = useFormContext()
  const { ref: formFieldRef, ...formFieldProps } = register(name)

  const forwardedRef = useForwardedRef(ref)

  return (
    <Radio
      mode={mode}
      {...props}
      {...formFieldProps}
      ref={(e) => {
        formFieldRef(e)
        forwardedRef.current = e
      }}
    />
  )
})
