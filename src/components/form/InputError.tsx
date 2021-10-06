import { ErrorMessage } from 'formik'
import { ClassNameProps } from '../types'
import { useTheme } from '../../framework'

type InputErrorProps = ClassNameProps & {
  /**
   * Define the error message.
   **/
  name: string
}

const FieldErrorMessage: React.FC = ({ children }) => {
  const { form } = useTheme()
  return <span className={form.inputError.base}>{children}</span>
}

const InputError: React.FC<InputErrorProps> = ({ name, className }) => {
  return (
    <div className={className}>
      <ErrorMessage name={name} component={FieldErrorMessage} />
    </div>
  )
}

export { InputError }
