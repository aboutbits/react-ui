import { ErrorMessage } from 'formik'
import { ReactElement } from 'react'

const FieldErrorMessage: React.FC = ({ children }) => {
  return (
    <span className="block text-xs text-field-error-message">{children}</span>
  )
}

export function InputError({
  name,
  className = '',
}: {
  name: string
  className?: string
}): ReactElement {
  return (
    <div className={className}>
      <ErrorMessage name={name} component={FieldErrorMessage} />
    </div>
  )
}
