import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { Alert } from '../alert'
import { ClassNameProps, Tone } from '../types'

export type FormErrorProps = ClassNameProps & {
  children?: ReactNode
}

/**
 * This component is a variation of the [Alert](/docs/components-alert-alert--docs) component.
 * Its main purpose is to show an error in a form. The default style applies `col-span-2`, so that the error message is shown in one line in `SectionContentTwoColumn` forms.
 */
export function FormError({ children, className }: FormErrorProps) {
  const { form } = useTheme()

  if (children === undefined || children === null) {
    return null
  }

  return (
    <Alert
      tone={Tone.Critical}
      className={classNames(className, form.formError.base)}
    >
      {children}
    </Alert>
  )
}
