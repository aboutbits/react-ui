import React, { forwardRef } from 'react'
import { Mode, ModeProps } from '../types'
import { Select } from './Select'
import { Option } from './Option'

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  ModeProps & {
    id: string
    label?: string
    name: string
    from: number
    to: number
  }

export const SelectYear = forwardRef<HTMLSelectElement, Props>(
  ({ from, to, mode = Mode.light, ...props }, ref) => {
    if (from > to) {
      return null
    }
    const selectOptions = Array(to - from + 1)
      .fill(0)
      .map((_, index: number) => index + from)

    return (
      <Select mode={mode} {...props} ref={ref}>
        {selectOptions.map((year: number) => (
          <Option key={`${props.name}-${year}`} value={year}>
            {year}
          </Option>
        ))}
      </Select>
    )
  }
)

SelectYear.displayName = 'SelectYear'
