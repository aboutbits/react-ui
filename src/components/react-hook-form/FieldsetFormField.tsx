import { FieldPath, FieldValues, get, useFormState } from 'react-hook-form'
import { FieldsetField, FieldsetFieldProps, Status } from '../form'

export type FieldsetFormProps<TFieldValues extends FieldValues> = Omit<
  FieldsetFieldProps,
  'status'
> & {
  fields: FieldPath<TFieldValues>[]
}

/**
 * A [FieldsetField](../?path=/docs/components-form-fieldsetfield--default-story) within the context of a `react-hook-form` form.
 *
 * The `FieldSetFormField` label will display an error state depending on the specified form `fields`.
 */
export function FieldsetFormField<
  TFieldValues extends FieldValues = FieldValues
>({ fields, children, ...props }: FieldsetFormProps<TFieldValues>) {
  const { errors } = useFormState({ name: fields })

  const hasError = fields.some((name) => !!get(errors, name))

  return (
    <FieldsetField {...props} status={hasError ? Status.Invalid : undefined}>
      {children}
    </FieldsetField>
  )
}
