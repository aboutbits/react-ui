import { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import {
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from 'react-hook-form'
import { InputField, InputFieldProps, Status } from '../form'

export type DateFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
> = Omit<InputFieldProps, 'status'> & {
  name: TFieldName
}

/**
 * An [InputField](../?path=/docs/components-form-inputfield--docs) within the context of a `react-hook-form` form and with the default type `date`.
 *
 * The form value that is returned for validation is of type `Date | null`. `null` is returned if the input is an empty string or nullish.
 */
export const DateFormField = forwardRef(function DateFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  {
    name,
    message,
    onChange,
    ...props
  }: DateFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <Controller
      name={name}
      render={({
        field: { value, onChange: fieldOnChange, ...field },
        fieldState: { error },
      }) => {
        const inputValue =
          (value as unknown) instanceof Date && !isNaN(value)
            ? formatDateForDateInput(value)
            : ''

        const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
          onChange?.(event)

          const value = event.target.value

          if (value === '') {
            fieldOnChange(null as FieldPathValue<TFieldValues, TFieldName>)
          } else {
            const date = new Date(value)
            if (!isNaN(date.getTime())) {
              fieldOnChange(date as FieldPathValue<TFieldValues, TFieldName>)
            }
          }
        }

        return (
          <InputField
            {...field}
            {...props}
            type="date"
            value={inputValue}
            onChange={inputOnChange}
            message={error?.message ?? message}
            status={error ? Status.Invalid : undefined}
            ref={ref}
          />
        )
      }}
    />
  )
})

export function formatDateForDateInput(date: Date): string {
  const year = date.getFullYear().toString().padStart(4, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}
