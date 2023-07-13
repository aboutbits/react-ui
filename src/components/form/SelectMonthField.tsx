import { forwardRef } from 'react'
import { z } from 'zod'
import { useInternationalization } from '../../framework'
import { Mode } from '../types'
import { SelectField, SelectFieldProps } from './SelectField'
import { Option } from './primitive'

export const MONTHS = [
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
] as const

export const zodMonth = z.enum(MONTHS)

export type Month = (typeof MONTHS)[number]

export type SelectMonthFieldProps = Omit<SelectFieldProps, 'children'>

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

  return MONTHS.map((month) => (
    <Option mode={mode} key={month} value={month}>
      {messages[`month.${month.toLowerCase()}`]}
    </Option>
  ))
}
