import React from 'react'
import { ClassNameProps } from '../types'
import { Select } from './Select'

type Props = ClassNameProps & {
  id: string
  label?: string
  name: string
  from: number
  to: number
}

export const SelectYear: React.FC<Props> = ({ from, to, ...props }) => {
  if (from > to) {
    return null
  }

  const selectOptionsYear = Array(to - from + 1)
    .fill(0)
    .map((_, index: number) => index + from)

  return (
    <Select {...props}>
      {selectOptionsYear.map((year: number) => (
        <option key={`${props.name}-${year}`} value={year}>
          {year}
        </option>
      ))}
    </Select>
  )
}
