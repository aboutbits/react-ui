import IconCheckBoxOutlineBlankRounded from '@aboutbits/react-material-icons/dist/IconCheckBoxOutlineBlankRounded'
import IconCheckBoxRounded from '@aboutbits/react-material-icons/dist/IconCheckBoxRounded'
import classNames from 'classnames'
import { ReactElement } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'
import { getClassNameWithoutMarginLeft } from '../utils/getClassNameWithoutMarginLeft'
import { InputError } from './InputError'
import { getCustomErrorCss, getCustomLabelCss } from './useCustomInputCss'

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size'
> &
  ModeProps & {
    name: string
    label?: string
    layout?: CheckboxLayout
    size?: CheckboxSize
    applyInputHeight?: boolean
  }

export enum CheckboxLayout {
  start = 'start',
  end = 'end',
  spaceBetween = 'spaceBetween',
}

export enum CheckboxSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export function Checkbox({
  name,
  label,
  layout = CheckboxLayout.start,
  size = CheckboxSize.md,
  applyInputHeight = false,
  disabled = false,
  mode = Mode.light,
  className,
  ...props
}: CheckboxProps): ReactElement {
  const {
    form: { checkbox, inputLabel, inputError },
  } = useTheme()
  const { register } = useFormContext()
  const field = register(name)
  const checked = useWatch({ name })

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
          checkbox.base,
          checkbox.layout[layout],
          applyInputHeight && [
            checkbox.inputHeight.base,
            checkbox.inputHeight.size[size],
          ],
          checkbox[disabledState]
        )}
      >
        {label && (
          <span
            className={classNames(
              checkbox.label.base,
              checkbox.label.size[size],
              customLabelCss
            )}
          >
            {label}
          </span>
        )}
        <input
          type="checkbox"
          {...props}
          {...field}
          disabled={disabled}
          className={checkbox.input.base}
        />
        <span
          className={classNames(
            checkbox.check.base,
            checkbox.check.size[size].base,
            checkbox.check[disabledState],
            checkbox.check.modeState[mode][disabledState].base,
            checkbox.check.modeState[mode][disabledState][checkedState]
          )}
        >
          {checked ? (
            <IconCheckBoxRounded />
          ) : (
            <IconCheckBoxOutlineBlankRounded />
          )}
        </span>
      </label>
      <InputError
        name={name}
        className={classNames(errorCssWithoutMarginLeft, customErrorCss)}
      />
    </div>
  )
}
