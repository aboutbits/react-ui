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
  const tone = status === Status.Invalid ? FormTone.Critical : FormTone.Neutral

  return (
    <Fieldset {...props} tone={tone}>
      {children}
    </Fieldset>
  )
}
