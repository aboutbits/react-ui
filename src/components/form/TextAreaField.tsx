import { forwardRef } from 'react'
import { HideRequiredProps, RequiredProps } from '../types'
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
  RequiredProps &
  HideRequiredProps & {
    label?: InputLabelProps['children']
  }

/**
 * A text area field independent of any form validation library.
 *
 * It is composed of the primitives [TextArea](../?path=/docs/components-form-primitive-textarea--docs), [InputLabel](../?path=/docs/components-form-primitive-inputlabel--docs) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--docs).
 */
export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(function TextAreaField(
  {
    label,
    message,
    mode,
    status,
    disabled,
    className,
    required,
    hideRequired,
    ...props
  },
  ref,
) {
  const tone = status === Status.Invalid ? FormTone.Critical : FormTone.Neutral

  const id = useId(props.id)

  return (
    <div className={className}>
      {Boolean(label) && (
        <InputLabel
          mode={mode}
          tone={tone}
          disabled={disabled}
          showRequired={required && !hideRequired}
          htmlFor={id}
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
      {Boolean(message) && (
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
