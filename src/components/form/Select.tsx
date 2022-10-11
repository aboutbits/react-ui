import classNames from 'classnames'
import React, { ForwardedRef, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'
import { useForwardedRef } from '../utils/useForwardedRef'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { Variant, VariantProps } from './types'
import { useCustomInputCss } from './useCustomInputCss'

export type SelectBaseProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  ModeProps &
  VariantProps & {
    name: string
  }

export type SelectWithoutLabelProps = SelectBaseProps & {
  label?: never
}

export type SelectWithLabelProps = SelectBaseProps & {
  id: string
  label: string
}

export type SelectProps = SelectWithoutLabelProps | SelectWithLabelProps

export function SelectComponent(
  {
    name,
    label,
    mode = Mode.light,
    variant = Variant.ghost,
    disabled,
    children,
    className,
    ...props
  }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const { register } = useFormContext()
  const { ref: fieldRef, ...field } = register(name)

  const forwardedRef = useForwardedRef(ref)

  const { form } = useTheme()
  const customCss = useCustomInputCss(name, {
    disabled,
    mode,
    variant,
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
      <select
        ref={(ref) => {
          forwardedRef.current = ref
          fieldRef(ref)
        }}
        {...field}
        {...props}
        disabled={disabled}
        className={classNames(form.select.base, customCss.inputCss)}
      >
        {children}
      </select>
      <InputError name={name} className={customCss.errorCss} />
    </div>
  )
}

export const Select = forwardRef(SelectComponent)
