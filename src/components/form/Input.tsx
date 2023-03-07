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
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
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
          {...props}
          name={name}
          ref={ref}
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

export const Input2 = forwardRef<HTMLInputElement, InputWithLabelProps>(
  function Input2(props, ref) {
    return <Input {...props} ref={ref} />
  }
)

export const Input3 = forwardRef<HTMLInputElement, InputWithLabelProps>(
  function Input3({ name, ...props }, ref) {
    const { register } = useFormContext()
    const { ref: fieldRef, ...field } = register(name)

    const forwardedRef = useForwardedRef(ref)

    return (
      <Input2
        {...props}
        {...field}
        ref={(thisRef) => {
          forwardedRef.current = thisRef
          fieldRef(thisRef)
        }}
      />
    )
  }
)

function InputSimpleComponent(
  {
    name,
    label,
    mode = Mode.light,
    variant = InputVariant.solid,
    disabled,
    className,
    iconStart,
    iconEnd,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { register } = useFormContext()
  const { ref: fieldRef, ...field } = register(name)

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
          {...props}
          name={field.name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          ref={(thisRef) => {
            if (ref) {
              if (typeof ref === 'function') {
                ref(thisRef)
              } else {
                ref.current = thisRef
              }
            }
            console.log('INPUT ref', thisRef)
            fieldRef(thisRef)
          }}
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

export const InputSimple = forwardRef(InputSimpleComponent)
