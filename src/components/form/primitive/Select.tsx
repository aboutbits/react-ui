import classNames from 'classnames'
import { forwardRef } from 'react'
import { ClassNameProps, Mode, ModeProps } from '../../types'
import {
  FormTone,
  FormToneProps,
  FormVariant,
  FormVariantProps,
} from '../types'
import { useSelectCss } from './useThemedCss'

export type SelectProps = Omit<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
  'className'
> &
  ModeProps &
  FormToneProps &
  ClassNameProps &
  FormVariantProps

/**
 * A themed `select` element.
 *
 * It inherits styles from the primitive [Input](../?path=/docs/components-form-primitive-input--default-story).
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      mode = Mode.light,
      variant = FormVariant.solid,
      tone = FormTone.neutral,
      className,
      disabled = false,
      children,
      ...props
    },
    ref,
  ) {
    const selectCss = useSelectCss({
      mode,
      variant,
      tone,
      disabled,
    })

    return (
      <select
        {...props}
        ref={ref}
        disabled={disabled}
        className={classNames(selectCss, className)}
      >
        {children}
      </select>
    )
  },
)
