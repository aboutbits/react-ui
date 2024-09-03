import IconList from '@aboutbits/react-material-icons/dist/IconListRoundedFilled'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarningRoundedFilled'
import { ReactElement } from 'react'
import { Tone } from '../../types'
import {
  DialogContentMessage,
  DialogContentMessageProps,
} from './DialogContentMessage'

export function DialogContentError({
  icon: Icon = IconWarning,
  ...props
}: Omit<DialogContentMessageProps, 'tone'>): ReactElement {
  return <DialogContentMessage tone={Tone.Critical} icon={Icon} {...props} />
}

export function DialogContentEmpty({
  icon: Icon = IconList,
  ...props
}: Omit<DialogContentMessageProps, 'tone'>): ReactElement {
  return <DialogContentMessage tone={Tone.Neutral} icon={Icon} {...props} />
}
