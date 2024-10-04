import IconCheckOutlinedFilled from '@aboutbits/react-material-icons/dist/IconCheckOutlinedFilled'
import IconInfoOutlinedFilled from '@aboutbits/react-material-icons/dist/IconInfoOutlinedFilled'
import IconWarningOutlinedFilled from '@aboutbits/react-material-icons/dist/IconWarningOutlinedFilled'
import { ReactElement } from 'react'
import { Tone } from '../types'
import { Alert } from './Alert'
import { AlertProps } from './types'

export function AlertSuccess({
  children,
  ...props
}: Omit<AlertProps, 'tone' | 'icon'>): ReactElement {
  return (
    <Alert tone={Tone.Success} icon={IconCheckOutlinedFilled} {...props}>
      {children}
    </Alert>
  )
}

export function AlertWarning({
  children,
  ...props
}: Omit<AlertProps, 'tone' | 'icon'>): ReactElement {
  return (
    <Alert tone={Tone.Warning} icon={IconWarningOutlinedFilled} {...props}>
      {children}
    </Alert>
  )
}

export function AlertCritical({
  children,
  ...props
}: Omit<AlertProps, 'tone' | 'icon'>): ReactElement {
  return (
    <Alert tone={Tone.Critical} icon={IconWarningOutlinedFilled} {...props}>
      {children}
    </Alert>
  )
}

export function AlertInformative({
  children,
  ...props
}: Omit<AlertProps, 'tone' | 'icon'>): ReactElement {
  return (
    <Alert tone={Tone.Informative} icon={IconInfoOutlinedFilled} {...props}>
      {children}
    </Alert>
  )
}
