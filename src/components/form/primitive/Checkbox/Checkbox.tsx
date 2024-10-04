import IconCheckBoxOutlineBlankRoundedFilled from '@aboutbits/react-material-icons/dist/IconCheckBoxOutlineBlankRoundedFilled'
import IconCheckBoxRoundedFilled from '@aboutbits/react-material-icons/dist/IconCheckBoxRoundedFilled'
import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'
import { useTheme } from '../../../../framework'
import {
  HideRequiredProps,
  IconProps,
  Mode,
  ModeProps,
  RequiredProps,
  Size,
} from '../../../types'
import {
  useCheckboxCss,
  useCheckboxInputCss,
  useCheckboxLabelCss,
} from '../useThemedCss'
import { CheckboxLayout } from './types'

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size' | 'placeholder' | 'required'
> &
  ModeProps &
  RequiredProps &
  HideRequiredProps & {
    label?: ReactNode
    layout?: CheckboxLayout
    size?: Size
    applyInputHeight?: boolean
  }

/**
 * A themed checkbox input that can be used in controlled or uncontrolled mode.
 *
 * It inherits styles from the primitive [InputLabel](../?path=/docs/components-form-primitive-inputlabel--docs).
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      mode = Mode.Light,
      layout = CheckboxLayout.Start,
      size = Size.Md,
      applyInputHeight = false,
      disabled = false,
      label,
      className,
      required,
      hideRequired,
      ...props
    },
    ref,
  ) {
    const checkboxCss = useCheckboxCss({
      layout,
      disabled,
      applyInputHeight,
      size,
    })
    const checkboxLabelCss = useCheckboxLabelCss({
      mode,
      size,
      disabled,
      showRequired: required && !hideRequired,
    })
    const checkboxInputCss = useCheckboxInputCss()

    return (
      <label className={classNames(checkboxCss, className)}>
        {Boolean(label) && <span className={checkboxLabelCss}>{label}</span>}
        <input
          {...props}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          required={required}
          className={checkboxInputCss}
        />
        <IconCheckboxOutlinedFilled
          mode={mode}
          size={size}
          disabled={disabled}
        />
      </label>
    )
  },
)

export const IconCheckboxOutlinedFilled = ({
  size,
  mode,
  disabled,
  className,
  ...props
}: IconProps &
  Required<ModeProps> & {
    size: Size
    disabled: boolean
  }) => {
  const {
    form: {
      checkbox: { check: theme },
    },
  } = useTheme()

  const disabledState = disabled ? 'disabled' : 'normal'

  const checkCss = classNames(
    theme.base,
    theme.size[size],
    theme.mode[mode],
    theme[disabledState],
    className,
  )

  return (
    <>
      <IconCheckBoxRoundedFilled
        className={classNames(
          theme.checked.base,
          theme.checked.modeState[mode][disabledState],
          checkCss,
        )}
        {...props}
      />
      <IconCheckBoxOutlineBlankRoundedFilled
        className={classNames(
          theme.unchecked.base,
          theme.unchecked.modeState[mode][disabledState],
          checkCss,
        )}
        {...props}
      />
    </>
  )
}
