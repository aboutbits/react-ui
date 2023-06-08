import { forwardRef } from 'react'
import { Mode, ModeProps } from '../types'
import { Select, SelectProps } from './Select'
import { Option } from './Option'

type Props = SelectProps &
  ModeProps & {
    from: number
    to: number
  }

export const SelectYear = forwardRef<HTMLSelectElement, Props>(
  function SelectYear({ from, to, mode = Mode.light, ...props }, ref) {
    if (from > to) {
      return null
    }
    const selectOptions = Array(to - from + 1)
      .fill(0)
      .map((_, index: number) => index + from)

    return (
      <Select mode={mode} {...props} ref={ref}>
        {selectOptions.map((year: number) => (
          <Option mode={mode} key={`${props.name}-${year}`} value={year}>
            {year}
          </Option>
        ))}
      </Select>
    )
  }
)
