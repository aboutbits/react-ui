import classNames from 'classnames'
import { ForwardedRef, forwardRef, ReactElement } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useTheme } from '../../framework'
import { Mode, ModeProps, Size } from '../types'
import { getClassNameWithoutMarginLeft } from '../utils/getClassNameWithoutMarginLeft'
import { useForwardedRef } from '../utils/useForwardedRef'
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
    layout?: ToggleSwitchLayout
    size?: Size
    applyInputHeight?: boolean
  }

export enum ToggleSwitchLayout {
  start = 'start',
  end = 'end',
  spaceBetween = 'spaceBetween',
}

function ToggleSwitchComponent(
  {
    name,
    label,
    layout = ToggleSwitchLayout.start,
    size = Size.md,
    applyInputHeight = false,
    disabled = false,
    mode = Mode.light,
    className,
    ...props
  }: ToggleSwitchProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const {
    form: { toggleSwitch, inputLabel, inputError },
  } = useTheme()
  const { register } = useFormContext()
  const { ref: fieldRef, ...field } = register(name)
  const checked = useWatch({ name })

  const forwardedRef = useForwardedRef(ref)

  const customLabelCss = getCustomLabelCss(inputLabel, {
    mode,
    disabled,
  })

  const customErrorCss = getCustomErrorCss(inputError, { mode })
  const errorCssWithoutMarginLeft = getClassNameWithoutMarginLeft(
    inputError.base
  )

  const checkedState = checked ? 'checked' : 'unchecked'
  const disabledState = disabled ? 'disabled' : 'normal'

  return (
    <div className={className}>
      <label
        className={classNames(
          toggleSwitch.base,
          toggleSwitch.layout[layout],
          applyInputHeight && [
            toggleSwitch.inputHeight.base,
            toggleSwitch.inputHeight.size[size],
          ],
          toggleSwitch[disabledState]
        )}
      >
        {label && (
          <span
            className={classNames(
              toggleSwitch.label.base,
              toggleSwitch.label.size[size],
              customLabelCss
            )}
          >
            {label}
          </span>
        )}
        <input
          ref={(ref) => {
            forwardedRef.current = ref
            fieldRef(ref)
          }}
          {...props}
          {...field}
          type="checkbox"
          disabled={disabled}
          className={toggleSwitch.input.base}
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
      <InputError
        name={name}
        className={classNames(errorCssWithoutMarginLeft, customErrorCss)}
      />
    </div>
  )
}

export const ToggleSwitch = forwardRef(ToggleSwitchComponent)
