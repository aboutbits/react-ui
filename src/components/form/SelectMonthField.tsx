import { forwardRef } from 'react'
import { useInternationalization } from '../../framework'
import { Mode } from '../types'
import { SelectField, SelectFieldProps } from './SelectField'
import { Option } from './primitive'

export type SelectMonthFieldProps = Omit<SelectFieldProps, 'children'>

export enum Month {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER',
}

export const MonthNames: [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER'
] = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
]

/**
 * A select field for months independent of any form validation library.
 *
 * It uses the [SelectField](../?path=/docs/components-form-selectfield--default-story) and [Option](../?path=/docs/components-form-primitive-option--default-story) components.
 */
export const SelectMonthField = forwardRef<
  HTMLSelectElement,
  SelectMonthFieldProps
>(function SelectMonthField(props, ref) {
  return (
    <SelectField {...props} ref={ref}>
      {useSelectMonthFieldOptions({ mode: props.mode })}
    </SelectField>
  )
})

export const useSelectMonthFieldOptions = ({ mode }: { mode?: Mode }) => {
  const { messages } = useInternationalization()

  return Object.keys(Month).map((element) => (
    <Option mode={mode} key={element} value={element}>
      {messages[`month.${element.toLowerCase() as Lowercase<Month>}`]}
    </Option>
  ))
}
