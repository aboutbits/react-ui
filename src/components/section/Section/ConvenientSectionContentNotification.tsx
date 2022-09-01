import { ReactElement } from 'react'
import IconList from '@aboutbits/react-material-icons/dist/IconList'
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
      tone={Tone.warning}
      icon={IconList}
      {...props}
    />
  )
}
