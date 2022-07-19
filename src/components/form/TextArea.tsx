import { forwardRef } from 'react'
import { useField } from 'formik'
import { Mode, ModeProps } from '../types'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'
import { Variant, VariantProps } from './types'

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  ModeProps &
  VariantProps & { id: string; label?: string; name: string }

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, mode = Mode.light, variant = Variant.ghost, className, ...props },
    ref
  ) => {
    const customCss = useCustomInputCss(
      props.name,
      props.disabled,
      mode,
      variant
    )
    const [field] = useField(props.name)

    return (
      <div className={className}>
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
        <InputError name={props.name} className={customCss.errorCss} />
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
