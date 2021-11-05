import classNames from 'classnames'
import { Form, Formik, useFormikContext } from 'formik'
import { ReactChildren, ReactElement, ReactNode, useEffect } from 'react'
import { useMatchMediaQuery } from '@aboutbits/react-toolbox'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { SubmitButton } from '../../button/SubmitButton'
import { FilterDialog } from './FilterDialog'

type Props<T> = ClassNameProps & {
  /**
   * Initial values of the filter.
   */
  initialValues: T
  /**
   * Callback when filters are applied.
   * Popup mode: Only called on confirmation button press.
   * Collapsible mode: Called on every change of an input value.
   * @param values T
   */
  onFilter: (values: T) => void
  /**
   * Close filter
   */
  onClose: () => void
  /**
   * Visualize the filter options in a popup, if it matches the provided media query.
   */
  asPopupMediaQuery?: string
  /**
   * Defines the content of the confirmation button, which is displayed in the popup.
   */
  confirmationButtonContent?: ReactNode
  /**
   * Input fields of your filter.
   */
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
  asPopupMediaQuery = '(max-width: 768px)',
  confirmationButtonContent,
  children,
}: Props<T>): ReactElement {
  const { section } = useTheme()
  const showFilterPopup = useMatchMediaQuery(asPopupMediaQuery)
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
