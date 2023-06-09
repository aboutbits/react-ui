import { ForwardedRef, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Mode, ModeProps } from '../types'
import { useForwardedRef } from '../utils/useForwardedRef'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { FormVariant, VariantProps } from './types'
import { useCustomInputCss } from './useCustomInputCss'

export type TextAreaBaseProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  ModeProps &
  VariantProps & { name: string }

export type TextAreaWithoutLabelProps = TextAreaBaseProps & {
  label?: never
}

export type TextAreaWithLabelProps = TextAreaBaseProps & {
  id: string
  label: string
}

export type TextAreaProps = TextAreaWithoutLabelProps | TextAreaWithLabelProps

export function TextAreaComponent(
  {
    name,
    label,
    mode = Mode.light,
    variant = FormVariant.solid,
    disabled,
    className,
    ...props
  }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const { register } = useFormContext()
  const { ref: fieldRef, ...field } = register(name)

  const forwardedRef = useForwardedRef(ref)

  const customCss = useCustomInputCss(name, {
    mode,
    variant,
    disabled,
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
      <textarea
        ref={(ref) => {
          forwardedRef.current = ref
          fieldRef(ref)
        }}
        {...field}
        {...props}
        disabled={disabled}
        className={customCss.inputCss}
      />
      <InputError name={name} className={customCss.errorCss} />
    </div>
  )
}

export const TextArea = forwardRef(TextAreaComponent)
