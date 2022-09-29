import { ErrorMessage } from 'formik'
import { ReactElement } from 'react'
import { ClassNameProps } from '../types'

export type InputErrorProps = ClassNameProps & {
  /**
   * Define the error message.
   **/
  name: string
}

export function InputError({ name, className }: InputErrorProps) {
  return (
    <ErrorMessage
      name={name}
      render={(message) => (
        <FieldErrorMessage message={message} className={className} />
      )}
    />
  )
}

type FieldErrorMessageProps = ClassNameProps & { message?: string }

function FieldErrorMessage({
  message,
  className,
}: FieldErrorMessageProps): ReactElement {
  return <span className={className}>{message}</span>
}
