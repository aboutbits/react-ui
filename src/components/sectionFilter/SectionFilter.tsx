import classNames from 'classnames'
import { Form, Formik } from 'formik'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { SubmitButton } from '../button/SubmitButton'
import { FormikAutoSubmit } from '../form'
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
   * Visualize the filter options in a dialog.
   */
  asDialog?: boolean
  /**
   * Input fields of your filter.
   */
  children: ReactNode
  /**
   * The dialog props are required, if you want to show the filter in form of a dialog on certain screen sizes.
   */
  dialogProps?: FilterDialogProps & {
    /**
     * Defines the content of the confirmation button, which is displayed in the popup.
     */
    confirmationButtonContent?: ReactNode
  }
  /**
   * Shows or hides the dialog.
   */
  dialogShow?: boolean
}

export function SectionFilter<T>({
  className,
  initialValues,
  onFilter,
  asDialog = false,
  dialogProps,
  dialogShow = false,
  children,
}: Props<T>): ReactElement | null {
  const { section } = useTheme()

  if (asDialog && dialogProps) {
    const { confirmationButtonContent, onDismiss, ...filterDialogProps } =
      dialogProps

    if (!dialogShow) {
      return null
    }

    return (
      <FilterDialog onDismiss={onDismiss} {...filterDialogProps}>
        <Formik<T>
          initialValues={initialValues}
          onSubmit={(values) => {
            onFilter(values)
            onDismiss()
          }}
        >
          <Form className={classNames(section.filter.dialog.base, className)}>
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
      <SectionFilterForm>
        <FormikAutoSubmit />
        {children}
      </SectionFilterForm>
    </Formik>
  )
}

export function SectionFilterForm({
  children,
}: {
  children: ReactNode
}): ReactElement {
  const { section } = useTheme()

  return <form className={section.filter.form.base}>{children}</form>
}
