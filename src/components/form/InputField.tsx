import { forwardRef } from 'react'
import { useId } from '../util/useId'
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
  Pick<InputMessageProps, 'message'> &
  StatusProps & {
    label?: InputLabelProps['children']
  }

/**
 * An input field independent of any form validation library.
 *
 * It is composed of the primitives [Input](../?path=/docs/components-form-primitive-input--default-story), [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--default-story).
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { label, message, mode, status, disabled, className, ...props },
    ref
  ) {
    const tone =
      status === Status.invalid ? FormTone.critical : FormTone.neutral

    const id = useId(props.id)
    return (
      <div className={className}>
        {!!label && (
          <InputLabel mode={mode} tone={tone} disabled={disabled} htmlFor={id}>
            {label}
          </InputLabel>
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
