import { ReactElement } from 'react'
import IconList from '@aboutbits/react-material-icons/dist/IconList'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import { Tone } from '../../types'
import {
  SectionContentMessage,
  SectionContentMessageProps,
} from './SectionContentMessage'

export function SectionContentError({
  ...props
}: Omit<SectionContentMessageProps, 'tone' | 'icon'>): ReactElement {
  return (
    <SectionContentMessage tone={Tone.critical} icon={IconWarning} {...props} />
  )
}

export function SectionContentEmpty({
  ...props
}: Omit<SectionContentMessageProps, 'tone' | 'icon'>): ReactElement {
  return (
    <SectionContentMessage tone={Tone.neutral} icon={IconList} {...props} />
  )
}
