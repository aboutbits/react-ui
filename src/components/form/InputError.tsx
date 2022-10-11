import { FieldError, get, useFormState } from 'react-hook-form'
import { ClassNameProps } from '../types'

export type InputErrorProps = ClassNameProps & {
  /**
   * Define the RHF field error
   */
  name: string
}

export function InputError({ name, className }: InputErrorProps) {
  const { errors } = useFormState({ name })
  const error = get(errors, name) as FieldError | undefined

  return error ? <span className={className}>{error.message}</span> : null
}
