import classNames from 'classnames'
import { Form, Formik, useFormikContext } from 'formik'
import { ReactChildren, ReactElement, useEffect } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props<T> = ClassNameProps & {
  initialValues: T
  onFilter: (values: T) => void
  children: ReactChildren
}

function SubmitOnChange(): null {
  const formik = useFormikContext()

  useEffect(() => {
    if (formik.isValid && formik.dirty) {
      formik.submitForm()
    }
  }, [formik.isValid, formik.dirty, formik.values])

  return null
}

export function SectionFilter<T>({
  className,
  initialValues,
  onFilter,
  children,
}: Props<T>): ReactElement {
  const { section } = useTheme()
  return (
    <Formik<T> initialValues={initialValues} onSubmit={onFilter}>
      <Form
        className={classNames(
          section.filter.container.base,
          section.filter.container.normal,
          className
        )}
      >
        <SubmitOnChange />
        {children}
      </Form>
    </Formik>
  )
}
