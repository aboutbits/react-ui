import { FieldSet, FieldSetProps } from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type FieldSetFieldProps = Omit<FieldSetProps, 'tone'> & StatusProps

/**
 * A fieldset field independent of any form validation library.
 */
export function FieldSetField({
  status,
  children,
  ...props
}: FieldSetFieldProps) {
  const tone = status === Status.invalid ? FormTone.critical : FormTone.neutral

  return (
    <FieldSet {...props} tone={tone}>
      {children}
    </FieldSet>
  )
}
