import classNames from 'classnames'
import { Field, useField } from 'formik'
import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'
import { InputError } from './InputError'
import { getCustomErrorCss, getCustomLabelCss } from './useCustomInputCss'

export type ToggleSwitchProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size'
> &
  ModeProps & {
    name: string
    label?: string
    size?: ToggleSwitchSize
  }

export enum ToggleSwitchSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export function ToggleSwitch({
  name,
  label,
  size = ToggleSwitchSize.md,
  disabled = false,
  mode = Mode.light,
  className,
  ...props
}: ToggleSwitchProps): ReactElement {
  const {
    form: { toggleSwitch, inputLabel, inputError },
  } = useTheme()
  const [field, meta] = useField(name)

  const customLabelCss = getCustomLabelCss(inputLabel, meta, disabled, mode)
  const customErrorCss = getCustomErrorCss(inputError, mode)

  const checkedState = field.value ? 'checked' : 'unchecked'
  const disabledState = disabled ? 'disabled' : 'normal'

  return (
    <div className={className}>
      <label
        className={classNames(toggleSwitch.base, toggleSwitch[disabledState])}
      >
        {label && (
          <span className={classNames(toggleSwitch.label.base, customLabelCss)}>
            {label}
          </span>
        )}
        <Field
          type="checkbox"
          name={name}
          className={toggleSwitch.input.base}
          disabled={disabled}
          {...props}
        />
        <span
          className={classNames(
            toggleSwitch.switch.base,
            toggleSwitch.switch.size[size].base,
            toggleSwitch.switch[disabledState],
            toggleSwitch.switch.modeState[mode][disabledState].base,
            toggleSwitch.switch.modeState[mode][disabledState][checkedState]
          )}
        >
          <span
            className={classNames(
              toggleSwitch.handle.base,
              toggleSwitch.handle.size[size].base,
              toggleSwitch.handle.size[size][checkedState],
              toggleSwitch.handle[disabledState],
              toggleSwitch.handle.modeState[mode][disabledState][checkedState]
            )}
          ></span>
        </span>
      </label>
      <InputError name={name} className={customErrorCss} />
    </div>
  )
}
