import IconCheckBoxOutlineBlankRounded from '@aboutbits/react-material-icons/dist/IconCheckBoxOutlineBlankRounded'
import IconCheckBoxRounded from '@aboutbits/react-material-icons/dist/IconCheckBoxRounded'
import classNames from 'classnames'
import { ForwardedRef, forwardRef, ReactElement } from 'react'
import { useTheme } from '../../framework'
import { Mode, ModeProps, Size } from '../types'
import { getClassNameWithoutMarginLeft } from '../utils/getClassNameWithoutMarginLeft'
import { useForwardedRef } from '../utils/useForwardedRef'
import { InputError } from './InputError'
import { getCustomErrorCss, getCustomLabelCss } from './useCustomInputCss'
import { useFormField } from './useFormField'

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
    size?: Size
    applyInputHeight?: boolean
  }

export enum CheckboxLayout {
  start = 'start',
  end = 'end',
  spaceBetween = 'spaceBetween',
}

function CheckboxComponent(
  {
    name,
    label,
    layout = CheckboxLayout.start,
    size = Size.md,
    applyInputHeight = false,
    disabled = false,
    readOnly = false,
    mode = Mode.light,
    className,
    ...props
  }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const {
    form: { checkbox, inputLabel, inputError },
  } = useTheme()
  const { fieldRef, fieldProps } = useFormField(name)

  const forwardedRef = useForwardedRef(ref)

  const customLabelCss = getCustomLabelCss(inputLabel, { mode, disabled })
  const customErrorCss = getCustomErrorCss(inputError, { mode, disabled })
  const errorCssWithoutMarginLeft = getClassNameWithoutMarginLeft(
    inputError.base
  )

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
          !readOnly && !disabled
            ? checkbox.normal
            : disabled
            ? checkbox.disabled
            : null
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
          ref={(ref) => {
            forwardedRef.current = ref
            fieldRef?.(ref)
          }}
          {...props}
          {...fieldProps}
          type="checkbox"
          disabled={disabled || readOnly}
          readOnly={readOnly}
          className={checkbox.input.base}
        />
        <span
          className={classNames(
            checkbox.check.base,
            checkbox.check.size[size].base,
            checkbox.check[disabled ? 'disabled' : 'normal'],
            checkbox.check.modeState[mode][disabled ? 'disabled' : 'normal']
              .base
          )}
        >
          <IconCheckBoxRounded className={checkbox.check.iconChecked.base} />
          <IconCheckBoxOutlineBlankRounded
            className={checkbox.check.iconUnchecked.base}
          />
        </span>
      </label>
      <InputError
        name={name}
        className={classNames(errorCssWithoutMarginLeft, customErrorCss)}
      />
    </div>
  )
}

export const Checkbox = forwardRef(CheckboxComponent)
