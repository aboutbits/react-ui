import { ErrorMessage } from 'formik'
import { ReactElement } from 'react'
import classnames from 'classnames'
import { ClassNameProps, Mode, ModeProps } from '../types'
import { useTheme } from '../../framework'

type InputErrorProps = ClassNameProps &
  ModeProps & {
    /**
     * Define the error message.
     **/
    name: string
  }

function FieldErrorMessage({
  mode = Mode.light,
  message,
}: ModeProps & { message?: string }): ReactElement {
  const { form } = useTheme()

  return (
    <span
      className={classnames(form.inputError.base, form.inputError[mode].normal)}
    >
      {message}
    </span>
  )
}

const InputError: React.FC<InputErrorProps> = ({
  name,
  mode = Mode.light,
  className,
}) => {
  return (
    <div className={className}>
      <ErrorMessage
        name={name}
        render={(message) => (
          <FieldErrorMessage mode={mode} message={message} />
        )}
      />
    </div>
  )
}

export { InputError }
