import { forwardRef } from 'react'
import { useField } from 'formik'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'

type Props = {
  /**
   * Defines the htmlFor for the label.
   * */
  id: string
  /**
   * Defines the label on the top left corner.
   * */
  label?: string
  /**
   * Defines the value for the input.
   * */
  name: string
  /**
   * Defines the disable status of the input.
   * */
  disabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, id, name, disabled, ...props }, ref) => {
    const customCss = useCustomInputCss(name, disabled)
    const [field] = useField(name)

    return (
      <div>
        <InputLabel inputId={id} label={label} className={customCss.labelCss} />
        <input {...field} {...props} ref={ref} className={customCss.inputCss} />
        <InputError name={name} className="mt-1" />
      </div>
    )
  }
)

Input.displayName = 'Input'
