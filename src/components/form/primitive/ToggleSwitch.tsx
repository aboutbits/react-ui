import classNames from 'classnames'
import { forwardRef, ReactNode } from 'react'
import {
  HideRequiredProps,
  Mode,
  ModeProps,
  RequiredProps,
  Size,
} from '../../types'
import {
  useToggleSwitchCss,
  useToggleSwitchHandleCss,
  useToggleSwitchInputCss,
  useToggleSwitchLabelCss,
  useToggleSwitchSwitchCss,
} from './useThemedCss'

export enum ToggleSwitchLayout {
  start = 'START',
  end = 'END',
  spaceBetween = 'SPACE_BETWEEN',
}

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
      mode = Mode.light,
      layout = ToggleSwitchLayout.start,
      size = Size.md,
      applyInputHeight = false,
      disabled = false,
      label,
      className,
      required,
      hideRequired,
      ...props
    },
    ref
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
      required: required && !hideRequired,
    })
    const toggleSwitchInputCss = useToggleSwitchInputCss()

    return (
      <label className={classNames(toggleSwitchCss, className)}>
        {label && <span className={toggleSwitchLabelCss}>{label}</span>}
        <input
          {...props}
          required={required}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={toggleSwitchInputCss}
        />
        <ToggleSwitchSwitch mode={mode} size={size} disabled={disabled} />
      </label>
    )
  }
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
