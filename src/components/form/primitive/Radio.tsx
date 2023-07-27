import classNames from 'classnames'
import { forwardRef, ReactNode } from 'react'
import IconRadioButtonCheckedRounded from '@aboutbits/react-material-icons/dist/IconRadioButtonCheckedRounded'
import IconRadioButtonUncheckedOutlined from '@aboutbits/react-material-icons/dist/IconRadioButtonUncheckedOutlined'
import { IconProps, Mode, ModeProps, Size } from '../../types'
import {
  useRadioCss,
  useRadioIconCss,
  useRadioInputCss,
  useRadioLabelCss,
} from './useThemedCss'

export enum RadioLayout {
  Start = 'START',
  End = 'END',
  SpaceBetween = 'SPACE_BETWEEN',
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
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    mode = Mode.Light,
    layout = RadioLayout.Start,
    size = Size.Md,
    applyInputHeight = false,
    disabled = false,
    label,
    className,
    ...props
  },
  ref,
) {
  const radioCss = useRadioCss({
    layout,
    disabled,
    applyInputHeight,
    size,
  })
  const radioLabelCss = useRadioLabelCss({ mode, size, disabled })
  const radioInputCss = useRadioInputCss({ size })

  return (
    <label className={classNames(radioCss, className)}>
      <input
        {...props}
        ref={ref}
        type="radio"
        disabled={disabled}
        className={radioInputCss}
      />
      <IconRadio mode={mode} size={size} disabled={disabled} />
      {Boolean(label) && <span className={radioLabelCss}>{label}</span>}
    </label>
  )
})

const IconRadio = ({
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
  const iconCssChecked = useRadioIconCss({
    mode,
    size,
    disabled,
    checked: true,
  })
  const iconCssUnchecked = useRadioIconCss({
    mode,
    size,
    disabled,
    checked: false,
  })

  return (
    <>
      <IconRadioButtonCheckedRounded
        className={classNames(iconCssChecked, className)}
        {...props}
      />
      <IconRadioButtonUncheckedOutlined
        className={classNames(iconCssUnchecked, className)}
        {...props}
      />
    </>
  )
}
