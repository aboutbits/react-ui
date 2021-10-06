import { Form as FormikForm } from 'formik'
import classNames from 'classnames'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

type Props = ClassNameProps

export const Form: React.FC<Props> = ({ className, children }) => {
  const {
    form: { form },
  } = useTheme()
  return (
    <FormikForm className={classNames(className, form.base)}>
      {children}
    </FormikForm>
  )
}
