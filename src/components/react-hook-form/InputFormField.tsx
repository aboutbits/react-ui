import { ForwardedRef, forwardRef } from 'react'
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form'
import { InputField, InputFieldProps, Status } from '../form'
import { useForwardedRef } from '../util/useForwardedRef'
import { useFieldError } from './util/useFieldError'

export type InputFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
> = Omit<InputFieldProps, 'status' | 'onChange' | 'onBlur'> & {
  name: TFieldName
  transformEmptyToNull?: boolean
  registerOptions?: RegisterOptions<TFieldValues, TFieldName>
}

/**
 * An [InputField](../?path=/docs/components-form-inputfield--default-story) within the context of a `react-hook-form` form.
 *
 * The form value that is returned for validation is of type `string` by default. If `transformEmptyToNull` is `true` and the input is empty, `null` is returned.
 */
export const InputFormField = forwardRef(function InputFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  {
    mode,
    variant,
    name,
    transformEmptyToNull = false,
    registerOptions,
    message,
    ...props
  }: InputFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { register } = useFormContext<TFieldValues>()
  const { ref: formFieldRef, ...formFieldProps } = register<TFieldName>(name, {
    setValueAs: (input: unknown) => {
      if (input === '' && transformEmptyToNull) {
        return null
      }
      return input
    },
    ...registerOptions,
  })

  const error = useFieldError(name)
  const forwardedRef = useForwardedRef(ref)

  return (
    <InputField
      mode={mode}
      variant={variant}
      {...props}
      {...formFieldProps}
      ref={(e) => {
        formFieldRef(e)
        forwardedRef.current = e
      }}
      message={error?.message ?? message}
      status={error ? Status.Invalid : undefined}
    />
  )
})
