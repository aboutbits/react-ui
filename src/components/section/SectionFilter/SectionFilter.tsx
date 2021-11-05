import classNames from 'classnames'
import { Form, Formik, useFormikContext } from 'formik'
import { ReactChildren, ReactElement, ReactNode, useEffect } from 'react'
import { useMatchMediaQuery } from '@aboutbits/react-toolbox'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { SubmitButton } from '../../button/SubmitButton'
import { FilterDialog } from './FilterDialog'

type Props<T> = ClassNameProps & {
  initialValues: T
  onFilter: (values: T) => void
  onClose: () => void
  showPopupMediaQuery?: string
  confirmationButtonContent: ReactNode
  children: ReactChildren
}

function SubmitOnChange(): null {
  const formik = useFormikContext()

  useEffect(() => {
    if (formik.isValid && formik.dirty) {
      formik.submitForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.isValid, formik.dirty, formik.values])

  return null
}

export function SectionFilter<T>({
  className,
  initialValues,
  onFilter,
  onClose,
  showPopupMediaQuery = '(max-width: 768px)',
  confirmationButtonContent,
  children,
}: Props<T>): ReactElement {
  const { section } = useTheme()
  const showFilterPopup = useMatchMediaQuery(showPopupMediaQuery)
  return showFilterPopup ? (
    <FilterDialog onDismiss={onClose} dialogLabel="Filter">
      <Formik<T>
        initialValues={initialValues}
        onSubmit={(values) => {
          onFilter(values)
          onClose()
        }}
      >
        <Form
          className={classNames(
            section.filter.popup.base,
            section.filter.popup.normal,
            className
          )}
        >
          {children}
          <div className="col-span-full">
            <SubmitButton className="w-full">
              {confirmationButtonContent}
            </SubmitButton>
          </div>
        </Form>
      </Formik>
    </FilterDialog>
  ) : (
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
