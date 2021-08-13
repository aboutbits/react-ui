import { forwardRef } from 'react'
import { useField } from 'formik'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { id: string; label?: string; name: string }

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, className, ...props }, ref) => {
    const customCss = useCustomInputCss(props.name, props.disabled)
    const [field] = useField(props.name)

    return (
      <div className={className}>
        <InputLabel
          inputId={props.id}
          label={label}
          className={customCss.labelCss}
        />
        <input {...field} {...props} ref={ref} className={customCss.inputCss} />
        <InputError name={props.name} className="mt-1" />
      </div>
    )
  }
)

Input.displayName = 'Input'
