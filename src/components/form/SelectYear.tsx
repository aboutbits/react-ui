import React, { forwardRef } from 'react'
import { Select } from './Select'

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  id: string
  label?: string
  name: string
  from: number
  to: number
}

export const SelectYear = forwardRef<HTMLSelectElement, Props>(
  ({ from, to, ...props }, ref) => {
    if (from > to) {
      return null
    }
    const selectOptions = Array(to - from + 1)
      .fill(0)
      .map((_, index: number) => index + from)

    return (
      <Select {...props} ref={ref}>
        {selectOptions.map((year: number) => (
          <option key={`${props.name}-${year}`} value={year}>
            {year}
          </option>
        ))}
      </Select>
    )
  }
)

SelectYear.displayName = 'SelectYear'
