import classNames from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import { useTheme } from '../../../framework'
import { Mode, ModeProps } from '../../types'

export type OptionProps = Omit<
  React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >,
  'children'
> &
  ModeProps & { children?: string | number | undefined | null }

/**
 * A custom themed `option` element to be used with [Select](../?path=/docs/components-form-primitive-select--default-story).
 */
export const Option = forwardRef(function Option(
  { value = '', mode = Mode.light, className, children, ...props }: OptionProps,
  ref: ForwardedRef<HTMLOptionElement>,
) {
  const {
    form: { option: theme },
  } = useTheme()

  return (
    <option
      {...props}
      ref={ref}
      value={value}
      className={classNames(theme.base, theme[mode].normal, className)}
    >
      {children}
    </option>
  )
})
