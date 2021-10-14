import React from 'react'
import classnames from 'classnames'
import { useTheme } from '../../framework'

type OptionProps = React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>

export const Option: React.FC<OptionProps> = ({
  className,
  children,
  ...props
}) => {
  const { form } = useTheme()

  return (
    <option className={classnames(form.option.base, className)} {...props}>
      {children}
    </option>
  )
}
