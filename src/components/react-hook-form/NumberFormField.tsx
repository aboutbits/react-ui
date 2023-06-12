import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'
import { InputFormFieldProps, InputFormField } from './InputFormField'

export type NumberFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<
  InputFormFieldProps<TFieldValues, TFieldName>,
  'transformEmptyToNull' | 'type'
>

/**
 * An [InputField](../?path=/docs/components-formnew-inputfield--default-story) within the context of a `react-hook-form` form and with the default type `number`.
 *
 * The form value that is returned for validation is of type `number | null`. `null` is returned if the input is an empty string.
 */
export const NumberFormField = forwardRef(function NumberFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  { ...props }: NumberFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <InputFormField
      type="number"
      registerOptions={{
        setValueAs: (input) => {
          if (input === '') {
            return null
          }
          return Number(input)
        },
      }}
      {...props}
      ref={ref}
    />
  )
})
