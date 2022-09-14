import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ContentMessage, ContentMessageProps } from '../../content'
import { ClassNameProps } from '../../types'
import { DialogContent } from './DialogContent'

export type DialogContentMessageProps = ClassNameProps & ContentMessageProps

export function DialogContentMessage({
  className,
  ...props
}: DialogContentMessageProps) {
  const { dialog } = useTheme()

  return (
    <DialogContent
      className={classNames(dialog.contentMessage.contentContainer, className)}
      {...props}
    >
      <ContentMessage {...props} />
    </DialogContent>
  )
}
