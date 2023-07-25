import { FieldPath, FieldValues } from 'react-hook-form'
import { FieldSetField, FieldSetFieldProps, Status } from '../form'
import { useFieldError } from './util'

export type FieldSetFormProps<TFieldValues extends FieldValues> = Omit<
  FieldSetFieldProps,
  'status' | 'name'
> & {
  name: FieldPath<TFieldValues>
}

/**
 * A [FieldSetField](../?path=/docs/components-form-fieldsetfield--default-story) within the context of a `react-hook-form` form.
 *
 * The `FieldSetFormField` label will display an error state depending on the specified `name` of the radio form fields.
 */
export function FieldSetFormField<
  TFieldValues extends FieldValues = FieldValues,
>({ name, children, message, ...props }: FieldSetFormProps<TFieldValues>) {
  const error = useFieldError(name)

  return (
    <FieldSetField
      {...props}
      name={name}
      message={error?.message ?? message}
      status={error ? Status.invalid : undefined}
    >
      {children}
    </FieldSetField>
  )
}
