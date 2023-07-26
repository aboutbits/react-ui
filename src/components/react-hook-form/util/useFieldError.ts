import {
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
  get,
  useFormState,
} from 'react-hook-form'

/**
 * @returns The errors of the given fields that are not undefined.
 */
export function getFieldErrors<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
>(obj: FieldErrors<TFieldValues>, paths: TFieldName[]) {
  return paths
    .map((path) => get(obj, path) as FieldError | undefined)
    .filter((error): error is FieldError => error !== undefined)
}

export function getFieldError<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
>(obj: FieldErrors<TFieldValues>, path: TFieldName) {
  return getFieldErrors(obj, [path])[0]
}

export function useFieldErrors<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
>(...name: TFieldName[]) {
  const { errors } = useFormState({ name })
  return getFieldErrors(errors, name)
}

export function useFieldError<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
>(name: TFieldName) {
  const { errors } = useFormState({ name })
  return getFieldError(errors, name)
}
