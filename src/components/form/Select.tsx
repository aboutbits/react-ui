import { useField } from 'formik'

import React, { forwardRef } from 'react'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'
import { InputProps } from './Input'

type SelectProps = InputProps

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, name, disabled, label, children, ...props }, ref) => {
    const customCss = useCustomInputCss(name, disabled)
    const [field] = useField(name)

    return (
      <div>
        <InputLabel inputId={id} label={label} className={customCss.labelCss} />
        <select {...field} {...props} ref={ref} className={customCss.inputCss}>
          {children}
        </select>
        <InputError name={name} className="mt-1" />
      </div>
    )
  }
)

Select.displayName = 'Select'
