import classNames from 'classnames'
import { useField } from 'formik'

import React, { forwardRef } from 'react'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { Variant, VariantProps } from './types'
import { useCustomInputCss } from './useCustomInputCss'

type SelectPropsBase = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  ModeProps &
  VariantProps & {
    name: string
  }

type SelectPropsWithoutLabel = SelectPropsBase & {
  label?: never
}

type SelectPropsWithLabel = SelectPropsBase & {
  id: string
  label: string
}

export type SelectProps = SelectPropsWithoutLabel | SelectPropsWithLabel

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      mode = Mode.light,
      variant = Variant.ghost,
      children,
      className,
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
    const [field] = useField(props.name)
    const { form } = useTheme()

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
          {...field}
          {...props}
          ref={ref}
          className={classNames(form.select.base, customCss.inputCss)}
        >
          {children}
        </select>
        <InputError name={props.name} className={customCss.errorCss} />
      </div>
    )
  }
)

Select.displayName = 'Select'
