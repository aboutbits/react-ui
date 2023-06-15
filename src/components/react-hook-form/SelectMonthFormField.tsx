import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'
import { useSelectMonthFieldOptions } from '../form'
import { SelectFormField, SelectFormFieldProps } from './SelectFormField'

export type SelectMonthFormField<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<SelectFormFieldProps<TFieldValues, TFieldName>, 'children'>

/**
 * A [SelectFormField](../?path=/docs/components-reacthookform-selectformfield--default-story) for months.
 */
export const SelectMonthFormField = forwardRef(function SelectMonthFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SelectMonthFormField<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return (
    <SelectFormField<TFieldValues, TFieldName> {...props} ref={ref}>
      {useSelectMonthFieldOptions({ mode: props.mode })}
    </SelectFormField>
  )
})
