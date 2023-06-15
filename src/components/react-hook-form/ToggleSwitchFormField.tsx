import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Status, ToggleSwitchField, ToggleSwitchFieldProps } from '../form'
import { useForwardedRef } from '../util/useForwardedRef'
import { useFieldError } from './util/useFieldError'

export type ToggleSwitchFormFieldProps = Omit<
  ToggleSwitchFieldProps,
  'status'
> & {
  name: string
}

/**
 * A [ToggleSwitchField](../?path=/docs/components-form-toggleswitchfield--default-story) within the context of a `react-hook-form` form.
 *
 * The form value that is returned for validation is of type `boolean`.
 */
export const ToggleSwitchFormField = forwardRef<
  HTMLInputElement,
  ToggleSwitchFormFieldProps
>(function ToggleSwitchFormField({ mode, name, message, ...props }, ref) {
  const { register } = useFormContext()
  const { ref: formFieldRef, ...formFieldProps } = register(name)

  const error = useFieldError(name)
  const forwardedRef = useForwardedRef(ref)

  return (
    <ToggleSwitchField
      mode={mode}
      {...props}
      {...formFieldProps}
      ref={(e) => {
        formFieldRef(e)
        forwardedRef.current = e
      }}
      message={error?.message?.toString() || message}
      status={error ? Status.invalid : undefined}
    />
  )
})
