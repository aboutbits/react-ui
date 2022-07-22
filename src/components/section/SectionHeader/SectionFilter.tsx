import classNames from 'classnames'
import { Form, Formik, FormikProps } from 'formik'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { FormikAutoSubmit } from '../../form'

type Props<T> = ClassNameProps &
  FormikProps<T> & {
    /**
     * Callback when filters are applied.
     * Popup mode: Only called on confirmation button press.
     * Collapsible mode: Called on every change of an input value.
     * @param values T
     */
    onFilter: (values: T) => void
    /**
     * If the form should submit automatically on change. Defaults to true.
     */
    autoSubmit?: boolean
    /**
     * Input fields of your filter.
     */
    children: ReactNode
  }

export function SectionFilter<T>({
  className,
  initialValues,
  autoSubmit = true,
  onFilter,
  children,
  ...props
}: Props<T>): ReactElement | null {
  const { section } = useTheme()

  return (
    <Formik<T> initialValues={initialValues} onSubmit={onFilter} {...props}>
      <Form className={classNames(section.filter.form.base, className)}>
        {autoSubmit && <FormikAutoSubmit />}
        {children}
      </Form>
    </Formik>
  )
}
