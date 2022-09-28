import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'

export type OptionProps = React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
> &
  ModeProps

export function Option({
  mode = Mode.light,
  className,
  children,
  ...props
}: OptionProps) {
  const { form } = useTheme()

  return (
    <option
      className={classNames(
        form.option.base,
        form.option[mode].normal,
        className
      )}
      {...props}
    >
      {children}
    </option>
  )
}
