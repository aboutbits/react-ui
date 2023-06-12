import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { CheckboxField, CheckboxFieldProps, Status } from '../formNew'
import { useForwardedRef } from '../utils/useForwardedRef'
import { useFieldError } from './util/useFieldError'

export type CheckboxFormFieldProps = Omit<CheckboxFieldProps, 'status'> & {
  name: string
}

/**
 * A [CheckboxField](../?path=/docs/components-formnew-checkboxfield--default-story) within the context of a `react-hook-form` form.
 *
 * The form value that is returned for validation is of type `boolean`.
 */
export const CheckboxFormField = forwardRef<
  HTMLInputElement,
  CheckboxFormFieldProps
>(function CheckboxFormField({ mode, name, message, ...props }, ref) {
  const { register } = useFormContext()
  const { ref: formFieldRef, ...formFieldProps } = register(name)

  const error = useFieldError(name)
  const forwardedRef = useForwardedRef(ref)

  return (
    <CheckboxField
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
