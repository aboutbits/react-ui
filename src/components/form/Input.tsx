import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import classNames from 'classnames'
import { useField } from 'formik'
import { ComponentType, forwardRef } from 'react'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'
import { InputError } from './InputError'
import { IconPosition, InputIcon } from './InputIcon'
import { InputLabel } from './InputLabel'
import { Variant, VariantProps } from './types'
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      mode = Mode.light,
      variant = Variant.solid,
      className,
      iconStart,
      iconEnd,
      ...props
    },
    ref
  ) => {
    const customCss = useCustomInputCss(
      props.name,
      props.disabled,
      mode,
      variant
    )
    const { form } = useTheme()
    const [field] = useField(props.name)

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
              disabled={props.disabled}
            />
          )}
          <input
            {...field}
            {...props}
            ref={ref}
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
              disabled={props.disabled}
            />
          )}
        </div>
        <InputError name={props.name} className={customCss.errorCss} />
      </div>
    )
  }
)

Input.displayName = 'Input'
