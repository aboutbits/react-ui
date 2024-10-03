import {
  IconListOutlinedFilled,
  IconWarningOutlinedFilled,
} from '@aboutbits/react-material-icons'
import { ReactElement } from 'react'
import { Tone } from '../../types'
import {
  DialogContentMessage,
  DialogContentMessageProps,
} from './DialogContentMessage'

export function DialogContentError({
  icon: Icon = IconWarningOutlinedFilled,
  ...props
}: Omit<DialogContentMessageProps, 'tone'>): ReactElement {
  return <DialogContentMessage tone={Tone.Critical} icon={Icon} {...props} />
}

export function DialogContentEmpty({
  icon: Icon = IconListOutlinedFilled,
  ...props
}: Omit<DialogContentMessageProps, 'tone'>): ReactElement {
  return <DialogContentMessage tone={Tone.Neutral} icon={Icon} {...props} />
}
