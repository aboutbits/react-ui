import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'
import {
  SelectYearFieldOptions,
  SelectYearFieldOptionsProps,
} from '../formNew/SelectYearField'
import { SelectFormField, SelectFormFieldProps } from './SelectFormField'

export type SelectYearFormField<
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
  { from, to, ...props }: SelectYearFormField<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  if (from > to) {
    return null
  }

  return (
    <SelectFormField<TFieldValues, TFieldName> {...props} ref={ref}>
      <SelectYearFieldOptions from={from} to={to} mode={props.mode} />
    </SelectFormField>
  )
})
