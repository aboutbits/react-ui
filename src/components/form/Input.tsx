import classNames from 'classnames'
import { ComponentType, ForwardedRef, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from '../../framework'
import { IconProps, Mode, ModeProps } from '../types'
import { useForwardedRef } from '../utils/useForwardedRef'
import { InputError } from './InputError'
import { IconPosition, InputIcon } from './InputIcon'
import { InputLabel } from './InputLabel'
import { InputVariant, VariantProps } from './types'
import { useCustomInputCss } from './useCustomInputCss'

export type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  ModeProps &
  VariantProps & {
    name: string
    iconStart?: ComponentType<IconProps>
    iconEnd?: ComponentType<IconProps>
  }

export type InputWithoutLabelProps = InputBaseProps & {
  label?: never
}

export type InputWithLabelProps = InputBaseProps & {
  id: string
  label: string
}

export type InputProps = InputWithoutLabelProps | InputWithLabelProps

function InputComponent(
  {
    name,
    label,
    mode = Mode.light,
    variant = InputVariant.solid,
    disabled,
    className,
    iconStart,
    iconEnd,
    type,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { register } = useFormContext()
  const { ref: fieldRef, ...field } = register(name, {
    setValueAs: (input) => {
      console.log('received input:', input)
      const missing = null
      const wrong = undefined
      if (input === '') {
        return missing
      }
      if (type === 'number') {
        const converted = parseFloat(input)
        if (isNaN(converted)) {
          return wrong
        }
        return converted
      } else if (type === 'date') {
        if (typeof input === 'string') {
          const converted = new Date(input)
          if (converted.toString() === 'Invalid Date') {
            return wrong
          }
          return converted
        } else {
          return input
        }
      }
      return input
    },
  })

  const forwardedRef = useForwardedRef(ref)

  const { form } = useTheme()
  const customCss = useCustomInputCss(name, {
    mode,
    variant,
    disabled,
  })

  return (
    <div className={className}>
      {label && props.id && (
        <InputLabel
          inputId={props.id}
          label={label}
          className={customCss.labelCss}
        />
      )}
      <div className={form.input.field}>
        {iconStart && (
          <InputIcon
            icon={iconStart}
            position={IconPosition.start}
            mode={mode}
            disabled={disabled}
          />
        )}
        <input
          ref={(ref) => {
            forwardedRef.current = ref
            fieldRef(ref)
          }}
          type={type}
          {...props}
          {...field}
          disabled={disabled}
          className={classNames(
            customCss.inputCss,
            iconStart ? form.input.withIconStart : null,
            iconEnd ? form.input.withIconEnd : null
          )}
        />
        {iconEnd && (
          <InputIcon
            icon={iconEnd}
            position={IconPosition.end}
            mode={mode}
            disabled={disabled}
          />
        )}
      </div>
      <InputError name={name} className={customCss.errorCss} />
    </div>
  )
}

export const Input = forwardRef(InputComponent)
