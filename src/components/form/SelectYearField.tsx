import { forwardRef } from 'react'
import { Mode } from '../types'
import { SelectField, SelectFieldProps } from './SelectField'
import { Option } from './primitive'

export type SelectYearFieldProps = Omit<SelectFieldProps, 'children'> &
  SelectYearFieldOptionsProps

/**
 * A select field for years independent of any form validation library.
 *
 * It uses the [SelectField](../?path=/docs/components-form-selectfield--default-story) and [Option](../?path=/docs/components-form-primitive-option--default-story) components.
 *
 * With the props `from` and `to`, the corresponding start and end year can be set.
 */
export const SelectYearField = forwardRef<
  HTMLSelectElement,
  SelectYearFieldProps
>(function SelectYearField({ from, to, ...props }, ref) {
  return (
    <SelectField {...props} ref={ref}>
      {useSelectYearFieldOptions({ from, to, mode: props.mode })}
    </SelectField>
  )
})

export type SelectYearFieldOptionsProps = {
  mode?: Mode
  from: number
  to: number
}

export const useSelectYearFieldOptions = ({
  mode,
  from,
  to,
}: SelectYearFieldOptionsProps) => {
  if (from > to) {
    return null
  }

  const selectOptions = Array(to - from + 1)
    .fill(0)
    .map((_, index: number) => index + from)

  return selectOptions.map((year: number) => (
    <Option mode={mode} key={year} value={year.toString()}>
      {year}
    </Option>
  ))
}
