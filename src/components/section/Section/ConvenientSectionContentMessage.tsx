import IconListOutlinedFilled from '@aboutbits/react-material-icons/dist/IconListOutlinedFilled'
import IconWarningOutlinedFilled from '@aboutbits/react-material-icons/dist/IconWarningOutlinedFilled'
import { ReactElement } from 'react'
import { Tone } from '../../types'
import {
  SectionContentMessage,
  SectionContentMessageProps,
} from './SectionContentMessage'

export function SectionContentError({
  icon: Icon = IconWarningOutlinedFilled,
  ...props
}: Omit<SectionContentMessageProps, 'tone'>): ReactElement {
  return <SectionContentMessage tone={Tone.Critical} icon={Icon} {...props} />
}

export function SectionContentEmpty({
  icon: Icon = IconListOutlinedFilled,
  ...props
}: Omit<SectionContentMessageProps, 'tone'>): ReactElement {
  return <SectionContentMessage tone={Tone.Neutral} icon={Icon} {...props} />
}
