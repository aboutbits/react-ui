import { ReactElement } from 'react'
import IconList from '@aboutbits/react-material-icons/dist/IconList'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import { Tone } from '../../types'
import {
  SectionContentNotification,
  SectionContentNotificationProps,
} from './SectionContentNotification'

export function SectionContentError({
  ...props
}: Omit<SectionContentNotificationProps, 'tone' | 'icon'>): ReactElement {
  return (
    <SectionContentNotification
      tone={Tone.critical}
      icon={IconWarning}
      {...props}
    />
  )
}

export function SectionContentEmpty({
  ...props
}: Omit<SectionContentNotificationProps, 'tone' | 'icon'>): ReactElement {
  return (
    <SectionContentNotification
      tone={Tone.neutral}
      icon={IconList}
      {...props}
    />
  )
}

export function SectionContentMessage({
  ...props
}: Omit<SectionContentNotificationProps, 'tone' | 'icon'>): ReactElement {
  return <SectionContentNotification tone={Tone.neutral} {...props} />
}
