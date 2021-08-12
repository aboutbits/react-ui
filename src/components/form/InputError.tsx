import { ErrorMessage } from 'formik'
import { ClassNameProps } from '../types'

type InputErrorProps = ClassNameProps & {
  /**
   * Define the error message.
   * */
  name: string
}

const FieldErrorMessage: React.FC = ({ children }) => {
  return (
    <span className="block text-xs abui-field-error-message">{children}</span>
  )
}

const InputError: React.FC<InputErrorProps> = ({ name, className }) => {
  return (
    <div className={className}>
      <ErrorMessage name={name} component={FieldErrorMessage} />
    </div>
  )
}

export { InputError }
