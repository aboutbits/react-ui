import {
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
  get,
  useFormState,
} from 'react-hook-form'

export function useFieldError<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
>(name: TFieldName) {
  const { errors } = useFormState({ name })
  return getFieldError(errors, name)
}

export function getFieldError<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
>(obj: FieldErrors<TFieldValues>, path?: TFieldName) {
  return get(obj, path) as FieldError | undefined
}
