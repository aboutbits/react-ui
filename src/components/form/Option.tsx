import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'

export type OptionProps = Omit<
  React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >,
  'children'
> &
  ModeProps & { children?: string | number | undefined | null }

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
