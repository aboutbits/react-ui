import { useField } from 'formik'

import React, { forwardRef } from 'react'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  id: string
  label?: string
  name: string
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, children, ...props }, ref) => {
    const customCss = useCustomInputCss(props.name, props.disabled)
    const [field] = useField(props.name)

    return (
      <div>
        <InputLabel
          inputId={props.id}
          label={label}
          className={customCss.labelCss}
        />
        <select {...field} {...props} ref={ref} className={customCss.inputCss}>
          {children}
        </select>
        <InputError name={props.name} className="mt-1" />
      </div>
    )
  }
)

Select.displayName = 'Select'
