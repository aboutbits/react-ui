import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { DialogContentArea, DialogContentAreaProps } from './DialogContentArea'

export type DialogContentProps = DialogContentAreaProps

export function DialogContent({
  className,
  children,
  ...props
}: DialogContentProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <DialogContentArea
      className={classNames(dialog.content.base, className)}
      {...props}
    >
      {children}
    </DialogContentArea>
  )
}
