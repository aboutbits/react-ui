import { forwardRef } from 'react'
import { ClassNameProps } from '../types'
import { useInternationalization } from '../../framework'
import { Select } from './Select'

type Props = ClassNameProps & {
  id: string
  name: string
  label?: string
  className?: string
}

export enum month {
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

export const monthNames: [
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

export const SelectMonth = forwardRef<HTMLSelectElement, Props>(
  ({ ...props }, ref) => {
    const internationalization = useInternationalization()

    return (
      <Select {...props} ref={ref}>
        {Object.keys(month).map((element: string) => (
          <option key={element} value={element}>
            {internationalization.translate(`shared.month.${element}`)}
          </option>
        ))}
      </Select>
    )
  }
)

SelectMonth.displayName = 'SelectMonth'
