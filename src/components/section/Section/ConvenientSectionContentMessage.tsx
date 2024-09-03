import IconList from '@aboutbits/react-material-icons/dist/IconListRoundedFilled'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarningRoundedFilled'
import { ReactElement } from 'react'
import { Tone } from '../../types'
import {
  SectionContentMessage,
  SectionContentMessageProps,
} from './SectionContentMessage'

export function SectionContentError({
  icon: Icon = IconWarning,
  ...props
}: Omit<SectionContentMessageProps, 'tone'>): ReactElement {
  return <SectionContentMessage tone={Tone.Critical} icon={Icon} {...props} />
}

export function SectionContentEmpty({
  icon: Icon = IconList,
  ...props
}: Omit<SectionContentMessageProps, 'tone'>): ReactElement {
  return <SectionContentMessage tone={Tone.Neutral} icon={Icon} {...props} />
}
