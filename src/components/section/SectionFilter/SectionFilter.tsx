import classNames from 'classnames'
import { Form, Formik, useFormikContext } from 'formik'
import {
  ReactChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { SubmitButton } from '../../button/SubmitButton'
import { FilterDialog } from './FilterDialog'

type Props<T> = ClassNameProps & {
  initialValues: T
  onFilter: (values: T) => void
  onCloseFilter: () => void
  showFilterPopupBelowBreakpoint?: number
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

function useBelowBreakpoint(breakpoint: number): boolean {
  const isWindowClient = typeof window === 'object'

  const [windowSize, setWindowSize] = useState<number | undefined>(
    isWindowClient ? window.innerWidth : undefined
  )

  useEffect(() => {
    function setSize() {
      setWindowSize(window.innerWidth)
    }

    if (isWindowClient) {
      window.addEventListener('resize', setSize)

      return () => window.removeEventListener('resize', setSize)
    }
  }, [isWindowClient, setWindowSize])

  return !!windowSize && breakpoint > windowSize
}

export function SectionFilter<T>({
  className,
  initialValues,
  onFilter,
  onCloseFilter,
  showFilterPopupBelowBreakpoint = 768,
  confirmationButtonContent,
  children,
}: Props<T>): ReactElement {
  const { section } = useTheme()
  const showFilterPopup = useBelowBreakpoint(showFilterPopupBelowBreakpoint)
  return showFilterPopup ? (
    <FilterDialog onDismiss={onCloseFilter} dialogLabel="Filter">
      <Formik<T>
        initialValues={initialValues}
        onSubmit={(values) => {
          onFilter(values)
          onCloseFilter()
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
