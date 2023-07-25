import { FieldPath, FieldValues, get, useFormState } from 'react-hook-form'
import { FieldSetField, FieldSetFieldProps, Status } from '../form'

export type FieldSetFormProps<TFieldValues extends FieldValues> = Omit<
  FieldSetFieldProps,
  'status'
> & {
  fields: FieldPath<TFieldValues>[]
}

/**
 * A [FieldSetField](../?path=/docs/components-form-fieldsetfield--default-story) within the context of a `react-hook-form` form.
 *
 * The `FieldSetFormField` label will display an error state depending on the specified form `fields`.
 */
export function FieldSetFormField<
  TFieldValues extends FieldValues = FieldValues,
>({ fields, children, ...props }: FieldSetFormProps<TFieldValues>) {
  const { errors } = useFormState({ name: fields })

  const hasError = fields.some((name) => Boolean(get(errors, name)))

  return (
    <FieldSetField {...props} status={hasError ? Status.invalid : undefined}>
      {children}
    </FieldSetField>
  )
}
