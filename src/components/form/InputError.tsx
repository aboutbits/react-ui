import { ErrorMessage } from 'formik'
import { ReactElement } from 'react'
import { ClassNameProps } from '../types'

type InputErrorProps = ClassNameProps & {
  /**
   * Define the error message.
   **/
  name: string
}

function FieldErrorMessage({
  message,
  className,
}: ClassNameProps & { message?: string }): ReactElement {
  return <span className={className}>{message}</span>
}

const InputError: React.FC<InputErrorProps> = ({ name, className }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => (
        <FieldErrorMessage message={message} className={className} />
      )}
    />
  )
}

export { InputError }
