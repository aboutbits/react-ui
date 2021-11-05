import classNames from 'classnames'
import { Form, Formik, useFormikContext } from 'formik'
import {
  ReactChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import { useMatchMediaQuery } from '@aboutbits/react-toolbox'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { SubmitButton } from '../button/SubmitButton'
import { FilterDialog, FilterDialogProps } from './FilterDialog'

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
   * Visualize the filter options in a popup, if it matches the provided media query.
   * e.g. '(max-width: 768px)'
   */
  asPopupMediaQuery?: string
  /**
   * Input fields of your filter.
   */
  children: ReactChildren
  /**
   * The dialog props are required, if you want to show the filter in form of a dialog on certain screen sizes.
   */
  dialogProps?: FilterDialogProps & {
    /**
     * Defines the content of the confirmation button, which is displayed in the popup.
     */
    confirmationButtonContent?: ReactNode
  }
}

function SubmitOnChange(): null {
  const formik = useFormikContext()
  const initialRender = useRef<boolean>(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else if (formik.isValid) {
      formik.submitForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.isValid, formik.values])

  return null
}

export function SectionFilter<T>({
  className,
  initialValues,
  onFilter,
  asPopupMediaQuery = '(max-width: 768px)',
  dialogProps,
  children,
}: Props<T>): ReactElement {
  const { section } = useTheme()
  const showFilterPopup = useMatchMediaQuery(asPopupMediaQuery)

  if (showFilterPopup && dialogProps) {
    const { confirmationButtonContent, onDismiss, ...filterDialogProps } =
      dialogProps

    return (
      <FilterDialog onDismiss={onDismiss} {...filterDialogProps}>
        <Formik<T>
          initialValues={initialValues}
          onSubmit={(values) => {
            onFilter(values)
            onDismiss()
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
    )
  }

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
