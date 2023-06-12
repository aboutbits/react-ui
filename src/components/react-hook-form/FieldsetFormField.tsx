import { FieldPath, FieldValues } from 'react-hook-form'
import { Status, FieldsetField, FieldsetFieldProps } from '../formNew'
import { useFieldError } from './util/useFieldError'

export type FieldsetFormProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<FieldsetFieldProps, 'status'> & {
  name: TFieldName
}

/**
 * A [FieldsetField](../?path=/docs/components-formnew-fieldsetfield--default-story) within the context of a `react-hook-form` form.
 */
export function FieldsetFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  message,
  children,
  ...props
}: FieldsetFormProps<TFieldValues, TFieldName>) {
  const error = useFieldError(name)

  return (
    <FieldsetField
      {...props}
      message={error?.message?.toString() || message}
      status={error ? Status.invalid : undefined}
    >
      {children}
    </FieldsetField>
  )
}
