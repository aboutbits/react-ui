import IconCheck from '@aboutbits/react-material-icons/dist/IconCheck'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import IconInfo from '@aboutbits/react-material-icons/dist/IconInfo'
import { ReactElement } from 'react'
import { Tone } from '../types'
import { Alert } from './Alert'
import { AlertProps } from './types'

export function AlertSuccess({
  children,
  ...props
}: Omit<AlertProps, 'tone' | 'icon'>): ReactElement {
  return (
    <Alert tone={Tone.success} icon={IconCheck} {...props}>
      {children}
    </Alert>
  )
}

export function AlertWarning({
  children,
  ...props
}: Omit<AlertProps, 'tone' | 'icon'>): ReactElement {
  return (
    <Alert tone={Tone.warning} icon={IconWarning} {...props}>
      {children}
    </Alert>
  )
}

export function AlertCritical({
  children,
  ...props
}: Omit<AlertProps, 'tone' | 'icon'>): ReactElement {
  return (
    <Alert tone={Tone.critical} icon={IconWarning} {...props}>
      {children}
    </Alert>
  )
}

export function AlertInformative({
  children,
  ...props
}: Omit<AlertProps, 'tone' | 'icon'>): ReactElement {
  return (
    <Alert tone={Tone.informative} icon={IconInfo} {...props}>
      {children}
    </Alert>
  )
}
