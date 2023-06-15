import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps, Tone } from '../types'
import { Alert } from '../alert'

export type FormErrorProps = ClassNameProps & {
  children?: ReactNode
}

export function FormError({ children, className }: FormErrorProps) {
  const { form } = useTheme()

  if (typeof children === 'undefined' || children === null) {
    return null
  }

  return (
    <Alert
      tone={Tone.critical}
      className={classNames(className, form.formError.base)}
    >
      {children}
    </Alert>
  )
}
