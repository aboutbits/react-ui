import { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { InputField, InputFieldProps, Status } from '../form'

export type DateFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<InputFieldProps, 'status' | 'onChange'> & {
  name: TFieldName
}

/**
 * An [InputField](../?path=/docs/components-form-inputfield--docs) within the context of a `react-hook-form` form and with the default type `date`.
 *
 * The form value that is returned for validation is of type `Date | null`. `null` is returned if the input is an empty string.
 */
export const DateFormField = forwardRef(function DateFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  { name, message, ...props }: DateFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <Controller
      name={name}
      render={({
        field: { value, onChange, ...field },
        fieldState: { error },
      }) => {
        const inputValue =
          (value as unknown) instanceof Date && !isNaN(value)
            ? formatDateForDateInput(value)
            : ''

        const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value
          const date = new Date(value)

          if (value === '') {
            onChange(null)
          } else if (!isNaN(date.getTime())) {
            onChange(date)
          }
        }

        return (
          <InputField
            {...field}
            {...props}
            type="date"
            value={inputValue}
            onChange={inputOnChange}
            message={error?.message?.toString() || message}
            status={error ? Status.invalid : undefined}
            ref={ref}
          />
        )
      }}
    />
  )
})

export function formatDateForDateInput(date: Date): string {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')

  return `${year}-${month}-${day}`
}
