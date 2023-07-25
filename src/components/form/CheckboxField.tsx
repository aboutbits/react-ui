import { forwardRef } from 'react'
import {
  Checkbox,
  CheckboxLayout,
  CheckboxProps,
  InputMessage,
  InputMessageProps,
} from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type CheckboxFieldProps = Omit<CheckboxProps, 'tone'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps

/**
 * A checkbox field.
 *
 * It is composed of the primitives [Checkbox](../?path=/docs/components-form-primitive-checkbox--default-story) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--default-story).
 */
export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  function CheckboxField(
    {
      mode,
      status,
      disabled = false,
      className,
      message,
      layout = CheckboxLayout.start,
      ...props
    },
    ref,
  ) {
    const tone = status === Status.invalid ? FormTone.critical : undefined

    return (
      <div className={className}>
        <Checkbox
          {...props}
          mode={mode}
          disabled={disabled}
          layout={layout}
          ref={ref}
        />
        {message !== undefined && (
          <InputMessage
            mode={mode}
            tone={tone}
            disabled={disabled}
            message={message}
            noIndent
          />
        )}
      </div>
    )
  },
)
