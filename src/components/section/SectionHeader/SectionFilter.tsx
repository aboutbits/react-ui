import { Form, Formik, FormikConfig, FormikValues } from 'formik'
import { ReactElement } from 'react'
import { ClassNameProps } from '../../types'
import { FormikAutoSubmit } from '../../form'

type Props<T extends FormikValues> = ClassNameProps &
  FormikConfig<T> & {
    /**
     * If the form should submit automatically on change. Defaults to true.
     */
    autoSubmit?: boolean
  }

export function SectionFilter<T extends FormikValues>({
  className,
  autoSubmit = true,
  children,
  ...props
}: Props<T>): ReactElement | null {
  return (
    <Formik<T> {...props}>
      <Form className={className}>
        {autoSubmit && <FormikAutoSubmit />}
        {children}
      </Form>
    </Formik>
  )
}
