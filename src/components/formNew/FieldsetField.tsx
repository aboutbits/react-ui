import { Mode } from '../types'
import {
  Fieldset,
  FieldsetProps,
  InputLabelProps,
  InputMessage,
  InputMessageProps,
} from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type FieldsetFieldProps = Omit<FieldsetProps, 'tone'> &
  Pick<InputMessageProps, 'message'> &
  Pick<InputLabelProps, 'label'> &
  StatusProps

/**
 * A fieldset field independent of any form validation library.
 *
 * Is composed of the primitives [Fieldset](../?path=/docs/components-formnew-primitive-fieldset--default-story) and [InputMessage](../?path=/docs/components-formnew-primitive-inputmessage--default-story).
 */
export function FieldsetField({
  mode = Mode.light,
  status,
  disabled = false,
  message,
  children,
  ...props
}: FieldsetFieldProps) {
  const tone = status === Status.invalid ? FormTone.critical : FormTone.neutral

  return (
    <Fieldset {...props} mode={mode} tone={tone} disabled={disabled}>
      {children}
      {message && (
        <InputMessage
          mode={mode}
          tone={tone}
          disabled={disabled}
          message={message}
        />
      )}
    </Fieldset>
  )
}
