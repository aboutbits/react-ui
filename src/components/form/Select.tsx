import { useField } from 'formik'

import React, { forwardRef } from 'react'
import { Mode, ModeProps } from '../types'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  ModeProps & {
    id: string
    label?: string
    name: string
  }

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, mode = Mode.light, children, className, ...props }, ref) => {
    const customCss = useCustomInputCss(props.name, props.disabled, mode)
    const [field] = useField(props.name)

    return (
      <div className={className}>
        <InputLabel
          inputId={props.id}
          label={label}
          className={customCss.labelCss}
        />
        <select {...field} {...props} ref={ref} className={customCss.inputCss}>
          {children}
        </select>
        <InputError name={props.name} className={customCss.errorCss} />
      </div>
    )
  }
)

Select.displayName = 'Select'
