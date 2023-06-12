import IconCheckBoxOutlineBlankRounded from '@aboutbits/react-material-icons/dist/IconCheckBoxOutlineBlankRounded'
import IconCheckBoxRounded from '@aboutbits/react-material-icons/dist/IconCheckBoxRounded'
import classNames from 'classnames'
import { forwardRef, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { IconProps, Mode, ModeProps, Size } from '../../types'
import {
  useCheckboxCss,
  useCheckboxInputCss,
  useCheckboxLabelCss,
} from './useThemedCss'

export enum CheckboxLayout {
  start = 'START',
  end = 'END',
  spaceBetween = 'SPACE_BETWEEN',
}

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size' | 'placeholder'
> &
  ModeProps & {
    label?: ReactNode
    layout?: CheckboxLayout
    size?: Size
    applyInputHeight?: boolean
  }

/**
 * A themed checkbox input that can be used in controlled or uncontrolled mode.
 *
 * It inherits styles from the primitive [InputLabel](../?path=/docs/components-formnew-primitive-inputlabel--default-story).
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      mode = Mode.light,
      layout = CheckboxLayout.start,
      size = Size.md,
      applyInputHeight = false,
      disabled = false,
      label,
      className,
      ...props
    },
    ref
  ) {
    const checkboxCss = useCheckboxCss({
      layout,
      disabled,
      applyInputHeight,
      size,
    })
    const checkboxLabelCss = useCheckboxLabelCss({ mode, size, disabled })
    const checkboxInputCss = useCheckboxInputCss()

    return (
      <label className={classNames(checkboxCss, className)}>
        {label && <span className={checkboxLabelCss}>{label}</span>}
        <input
          {...props}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={checkboxInputCss}
        />
        <IconCheckbox mode={mode} size={size} disabled={disabled} />
      </label>
    )
  }
)

export const IconCheckbox: React.FC<
  IconProps &
    Required<ModeProps> & {
      size: Size
      disabled: boolean
    }
> = ({ size, mode, disabled, className, ...props }) => {
  const {
    formNew: {
      checkbox: { check: theme },
    },
  } = useTheme()

  const disabledState = disabled ? 'disabled' : 'normal'

  const checkCss = classNames(
    theme.base,
    theme.size[size],
    theme.mode[mode],
    theme[disabledState],
    className
  )

  return (
    <>
      <IconCheckBoxRounded
        className={classNames(
          theme.checked.base,
          theme.checked.modeState[mode][disabledState],
          checkCss
        )}
        {...props}
      />
      <IconCheckBoxOutlineBlankRounded
        className={classNames(
          theme.unchecked.base,
          theme.unchecked.modeState[mode][disabledState],
          checkCss
        )}
        {...props}
      />
    </>
  )
}
