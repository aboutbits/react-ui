import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'
import { InputFormField, InputFormFieldProps } from './InputFormField'

export type NumberFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
> = Omit<
  InputFormFieldProps<TFieldValues, TFieldName>,
  'transformEmptyToNull' | 'type'
>

/**
 * An [InputField](../?path=/docs/components-form-inputfield--docs) within the context of a `react-hook-form` form and with the default type `number`.
 *
 * The form value that is returned for validation is of type `number | null`. `null` is returned if the input is an empty string or nullish.
 */
export const NumberFormField = forwardRef(function NumberFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  { ...props }: NumberFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <InputFormField
      type="number"
      registerOptions={{
        setValueAs: (input: string | null | undefined) => {
          if (input === '' || input === null || input === undefined) {
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
