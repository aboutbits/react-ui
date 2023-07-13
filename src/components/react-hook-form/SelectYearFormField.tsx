import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'
import { SelectYearFieldOptionsProps, useSelectYearFieldOptions } from '../form'
import { SelectFormField, SelectFormFieldProps } from './SelectFormField'

export type SelectYearFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<SelectFormFieldProps<TFieldValues, TFieldName>, 'children'> &
  SelectYearFieldOptionsProps

/**
 * A [SelectFormField](../?path=/docs/components-reacthookform-selectformfield--default-story) for years.
 */
export const SelectYearFormField = forwardRef(function SelectYearFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  { from, to, ...props }: SelectYearFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return (
    <SelectFormField<TFieldValues, TFieldName> {...props} ref={ref}>
      {useSelectYearFieldOptions({ from, to, mode: props.mode })}
    </SelectFormField>
  )
})
