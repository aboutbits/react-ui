import { forwardRef } from 'react'
import { useField } from 'formik'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { id: string; label?: string; name: string }

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
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
