import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'
import {
  HideRequiredProps,
  Mode,
  ModeProps,
  RequiredProps,
  Size,
} from '../../../types'
import {
  useToggleSwitchCss,
  useToggleSwitchHandleCss,
  useToggleSwitchInputCss,
  useToggleSwitchLabelCss,
  useToggleSwitchSwitchCss,
} from '../useThemedCss'
import { ToggleSwitchLayout } from './types'

export type ToggleSwitchProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size' | 'placeholder'
> &
  ModeProps &
  RequiredProps &
  HideRequiredProps & {
    label?: ReactNode
    layout?: ToggleSwitchLayout
    size?: Size
    applyInputHeight?: boolean
  }

/**
 * A toggle switch input that can be used in controlled or uncontrolled mode.
 */
export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  function ToggleSwitch(
    {
      mode = Mode.Light,
      layout = ToggleSwitchLayout.Start,
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
    const toggleSwitchCss = useToggleSwitchCss({
      layout,
      disabled,
      applyInputHeight,
      size,
    })
    const toggleSwitchLabelCss = useToggleSwitchLabelCss({
      mode,
      size,
      disabled,
      showRequired: required && !hideRequired,
    })
    const toggleSwitchInputCss = useToggleSwitchInputCss()

    return (
      <label className={classNames(toggleSwitchCss, className)}>
        {Boolean(label) && (
          <span className={toggleSwitchLabelCss}>{label}</span>
        )}
        <input
          {...props}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          required={required}
          className={toggleSwitchInputCss}
        />
        <ToggleSwitchSwitch mode={mode} size={size} disabled={disabled} />
      </label>
    )
  },
)

export const ToggleSwitchSwitch = ({
  size,
  disabled,
  mode,
}: {
  size: Size
  disabled: boolean
  mode: Mode
}) => {
  const switchCss = useToggleSwitchSwitchCss({
    mode,
    size,
    disabled,
  })
  const handleCss = useToggleSwitchHandleCss({
    mode,
    size,
    disabled,
  })

  return (
    <span className={switchCss}>
      <span className={handleCss} />
    </span>
  )
}
