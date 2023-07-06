import { Fieldset, FieldsetProps } from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type FieldsetFieldProps = Omit<FieldsetProps, 'tone'> & StatusProps

/**
 * A fieldset field independent of any form validation library.
 */
export function FieldsetField({
  status,
  children,
  ...props
}: FieldsetFieldProps) {
  const tone = status === Status.invalid ? FormTone.critical : FormTone.neutral

  return (
    <Fieldset {...props} tone={tone}>
      {children}
    </Fieldset>
  )
}