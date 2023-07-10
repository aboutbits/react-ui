import { forwardRef } from 'react'
import {
  InputMessage,
  InputMessageProps,
  Radio,
  RadioLayout,
  RadioProps,
} from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type RadioFieldProps = Omit<RadioProps, 'tone'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps

/**
 * A radio field.
 *
 * Is composed of the primitives [Radio](../?path=/docs/components-form-primitive-radio--default-story) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--default-story).
 */
export const RadioField = forwardRef<HTMLInputElement, RadioFieldProps>(
  function RadioField(
    {
      mode,
      status,
      disabled = false,
      className,
      message,
      layout = RadioLayout.start,
      ...props
    },
    ref
  ) {
    const tone = status === Status.invalid ? FormTone.critical : undefined

    return (
      <div className={className}>
        <Radio
          {...props}
          mode={mode}
          disabled={disabled}
          layout={layout}
          ref={ref}
        />
        {message && (
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
  }
)
