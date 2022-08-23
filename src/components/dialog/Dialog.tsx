import { DialogContent, DialogOverlay, DialogOverlayProps } from '@reach/dialog'
import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export enum DialogSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type DialogProps = ClassNameProps &
  DialogOverlayProps & {
    title: string
    size?: DialogSize
    children?: ReactElement
  }

export function Dialog({
  title,
  size = DialogSize.md,
  className,
  children,
  ...props
}: DialogProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <DialogOverlay className={dialog.overlay} {...props}>
      <DialogContent
        aria-label={title}
        className={classNames(
          dialog.dialog.base,
          dialog.dialog.size[size],
          className
        )}
      >
        {children}
      </DialogContent>
    </DialogOverlay>
  )
}
