import { useId } from '@headlessui/react/dist/hooks/use-id'
import { forwardRef } from 'react'
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
  Pick<InputLabelProps, 'label'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps

/**
 * A text area field independent of any form validation library.
 *
 * Is composed of the primitives [TextArea](../?path=/docs/components-formnew-primitive-textarea--default-story), [InputLabel](../?path=/docs/components-formnew-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-formnew-primitive-inputmessage--default-story).
 */
export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(function TextAreaField(
  { label, message, mode, status, disabled, className, ...props },
  ref
) {
  const tone = status === Status.invalid ? FormTone.critical : FormTone.neutral

  const autoId = useId()
  const id = props.id ?? autoId

  return (
    <div className={className}>
      {!!label && (
        <InputLabel
          mode={mode}
          tone={tone}
          disabled={disabled}
          htmlFor={id}
          label={label}
        />
      )}
      <TextArea
        {...props}
        ref={ref}
        id={id}
        mode={mode}
        tone={tone}
        disabled={disabled}
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
