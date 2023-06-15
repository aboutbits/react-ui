import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import { Status, TextAreaField, TextAreaFieldProps } from '../form'
import { useForwardedRef } from '../utils/useForwardedRef'
import { InputFormFieldProps } from './InputFormField'
import { useFieldError } from './util/useFieldError'

export type TextAreaFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<TextAreaFieldProps, 'status' | 'onChange' | 'onBlur'> &
  Pick<
    InputFormFieldProps<TFieldValues, TFieldName>,
    'name' | 'transformEmptyToNull' | 'registerOptions'
  >

/**
 * A [TextAreaField](../?path=/docs/components-form-fields-textareafield--default-story) within the context of a `react-hook-form` form.
 *
 * The form value that is returned for validation is of type `string` by default. If `transformEmptyToNull` is `true` and the input is empty, `null` is returned.
 */
export const TextAreaFormField = forwardRef(function TextAreaFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  {
    mode,
    variant,
    name,
    transformEmptyToNull = false,
    registerOptions,
    message,
    ...props
  }: TextAreaFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const { register } = useFormContext<TFieldValues>()
  const { ref: formFieldRef, ...formFieldProps } = register<TFieldName>(name, {
    setValueAs: (input) => {
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
    <TextAreaField
      mode={mode}
      variant={variant}
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
