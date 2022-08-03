import classNames from 'classnames'
import { useTheme } from '../../framework'
import { ClassNameProps, Tone } from '../types'
import { Alert } from '../alert'

export const FormError: React.FC<ClassNameProps> = ({
  children,
  className,
}) => {
  const { form } = useTheme()

  if (typeof children === 'undefined' || children === null) {
    return null
  }

  return (
    <Alert
      tone={Tone.critical}
      className={classNames(className, form.formError.base)}
    >
      {children}
    </Alert>
  )
}
