import IconRadioButtonCheckedRounded from '@aboutbits/react-material-icons/dist/IconRadioButtonCheckedRounded'
import IconRadioButtonUncheckedOutlined from '@aboutbits/react-material-icons/dist/IconRadioButtonUncheckedOutlined'
import classNames from 'classnames'
import { forwardRef, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { IconProps, Mode, ModeProps, Size } from '../../types'
import { useRadioCss, useRadioInputCss, useRadioLabelCss } from './useThemedCss'

export enum RadioLayout {
  start = 'START',
  end = 'END',
  spaceBetween = 'SPACE_BETWEEN',
}

export type RadioProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size' | 'placeholder'
> &
  ModeProps & {
    label?: ReactNode
    layout?: RadioLayout
    size?: Size
    applyInputHeight?: boolean
  }

/**
 * A themed radio input that can be used in controlled or uncontrolled mode.
 *
 * It inherits styles from the primitive [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story).
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    mode = Mode.light,
    layout = RadioLayout.start,
    size = Size.md,
    applyInputHeight = false,
    disabled = false,
    label,
    className,
    ...props
  },
  ref
) {
  const radioCss = useRadioCss({
    layout,
    disabled,
    applyInputHeight,
    size,
  })
  const radioLabelCss = useRadioLabelCss({ mode, size, disabled })
  const radioInputCss = useRadioInputCss()

  return (
    <label className={classNames(radioCss, className)}>
      {label && <span className={radioLabelCss}>{label}</span>}
      <input
        {...props}
        ref={ref}
        type="radio"
        disabled={disabled}
        className={radioInputCss}
      />
      <IconRadio mode={mode} size={size} disabled={disabled} />
    </label>
  )
})

export const IconRadio: React.FC<
  IconProps &
    Required<ModeProps> & {
      size: Size
      disabled: boolean
    }
> = ({ size, mode, disabled, className, ...props }) => {
  const {
    form: {
      radio: { check: theme },
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
      <IconRadioButtonCheckedRounded
        className={classNames(
          theme.checked.base,
          theme.checked.modeState[mode][disabledState],
          checkCss
        )}
        {...props}
      />
      <IconRadioButtonUncheckedOutlined
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
