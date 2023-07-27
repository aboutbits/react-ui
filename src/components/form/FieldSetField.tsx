import { useTheme } from '../..'
import {
  FieldSet,
  FieldSetProps,
  InputMessage,
  InputMessageProps,
} from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type FieldSetFieldProps = Omit<FieldSetProps, 'tone'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps

/**
 * A fieldset field independent of any form validation library.
 */
export function FieldSetField({
  status,
  children,
  mode,
  disabled,
  message,
  className,
  ...props
}: FieldSetFieldProps) {
  const tone = status === Status.Invalid ? FormTone.Critical : FormTone.Neutral
  const { form: theme } = useTheme()

  return (
    <div className={theme.fieldset.messageContainer}>
      <FieldSet {...props} mode={mode} tone={tone} disabled={disabled}>
        {children}
      </FieldSet>
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
}
