import { forwardRef } from 'react'
import { RequiredProps } from '../types'
import { useId } from '../util/useId'
import {
  InputLabel,
  InputLabelProps,
  InputMessage,
  InputMessageProps,
  TextArea,
  TextAreaProps,
} from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type TextAreaFieldProps = Omit<TextAreaProps, 'tone'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps &
  RequiredProps & {
    label?: InputLabelProps['children']
  }

/**
 * A text area field independent of any form validation library.
 *
 * Is composed of the primitives [TextArea](../?path=/docs/components-form-primitive-textarea--default-story), [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--default-story).
 */
export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(function TextAreaField(
  { label, message, mode, status, disabled, className, required, ...props },
  ref
) {
  const tone = status === Status.invalid ? FormTone.critical : FormTone.neutral

  const id = useId(props.id)

  return (
    <div className={className}>
      {!!label && (
        <InputLabel
          mode={mode}
          tone={tone}
          disabled={disabled}
          htmlFor={id}
          required={required}
        >
          {label}
        </InputLabel>
      )}
      <TextArea
        {...props}
        ref={ref}
        id={id}
        mode={mode}
        tone={tone}
        disabled={disabled}
        required={required}
      />
      {!!message && (
        <InputMessage
          mode={mode}
          tone={tone}
          disabled={disabled}
          message={message}
        />
      )}
    </div>
  )
})
