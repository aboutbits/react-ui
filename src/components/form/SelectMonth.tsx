import React, { forwardRef } from 'react'
import { ClassNameProps, Mode, ModeProps } from '../types'
import { useInternationalization } from '../../framework'
import { Select } from './Select'
import { Option } from './Option'

type SelectMonthProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  ClassNameProps &
  ModeProps & {
    id: string
    name: string
    label?: string
    className?: string
  }

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

export const SelectMonth = forwardRef<HTMLSelectElement, SelectMonthProps>(
  ({ mode = Mode.light, ...props }, ref) => {
    const internationalization = useInternationalization()

    return (
      <Select mode={mode} {...props} ref={ref}>
        {Object.keys(Month).map((element: string) => (
          <Option mode={mode} key={element} value={element}>
            {internationalization.translate(`shared.month.${element}`)}
          </Option>
        ))}
      </Select>
    )
  }
)

SelectMonth.displayName = 'SelectMonth'
