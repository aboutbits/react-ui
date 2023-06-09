import { useId } from '@headlessui/react/dist/hooks/use-id'
import { forwardRef } from 'react'
import {
  Input,
  InputLabel,
  InputLabelProps,
  InputMessage,
  InputMessageProps,
  InputProps,
} from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type InputFieldProps = Omit<InputProps, 'tone'> &
  Pick<InputLabelProps, 'label'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps

/**
 * An input field independent of any form validation library.
 *
 * Is composed of the primitives [Input](../?path=/docs/components-formnew-primitive-input--default-story), [InputLabel](../?path=/docs/components-formnew-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-formnew-primitive-inputmessage--default-story).
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { label, message, mode, status, disabled, className, ...props },
    ref
  ) {
    const tone =
      status === Status.invalid ? FormTone.critical : FormTone.neutral

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
        <Input
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
  }
)
