import { forwardRef } from 'react'
import { useField } from 'formik'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'
import { InputProps } from './Input'

type TextAreaProps = InputProps & {
  /**
   * Defines the number of rows within the textarea.
   * */
  rows: number
  /**
   * Defines the maximum length of the input.
   * */
  maxlength: number
  /**
   * Defines if the spellchecker is enabled.
   * */
  spellcheck: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...props }, ref) => {
    const customCss = useCustomInputCss(props.name, props.disabled)
    const [field] = useField(props.name)

    return (
      <div>
        <InputLabel
          inputId={props.id}
          label={label}
          className={customCss.labelCss}
        />
        <textarea
          {...field}
          {...props}
          ref={ref}
          className={customCss.inputCss}
        />
        <InputError name={props.name} className="mt-1" />
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
