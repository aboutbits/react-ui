import { forwardRef } from 'react'
import { HideRequiredProps, RequiredProps } from '../types'
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

export type InputFieldProps = Omit<InputProps, 'tone' | 'required'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps &
  RequiredProps &
  HideRequiredProps & {
    label?: InputLabelProps['children']
  }

/**
 * An input field independent of any form validation library.
 *
 * Is composed of the primitives [Input](../?path=/docs/components-form-primitive-input--default-story), [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--default-story).
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
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
    ref
  ) {
    const tone =
      status === Status.invalid ? FormTone.critical : FormTone.neutral

    const id = useId(props.id)
    return (
      <div className={className}>
        {label && (
          <InputLabel
            mode={mode}
            tone={tone}
            disabled={disabled}
            htmlFor={id}
            showRequired={required && !hideRequired}
          >
            {label}
          </InputLabel>
        )}
        <Input
          {...props}
          required={required}
          ref={ref}
          id={id}
          mode={mode}
          tone={tone}
          disabled={disabled}
        />
        {message && (
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
