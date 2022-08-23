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

export enum DialogPosition {
  center = 'center',
  fullscreen = 'fullscreen',
}

export type DialogProps = ClassNameProps &
  DialogOverlayProps & {
    title: string
    size?: DialogSize
    children?: ReactElement
    mobilePosition?: DialogPosition
    desktopPosition?: DialogPosition
  }

export function Dialog({
  title,
  size = DialogSize.md,
  mobilePosition = DialogPosition.center,
  desktopPosition = DialogPosition.center,
  className,
  children,
  ...props
}: DialogProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <DialogOverlay
      className={classNames(
        dialog.overlay.base,
        dialog.overlay.mobilePosition[mobilePosition],
        dialog.overlay.desktopPosition[desktopPosition]
      )}
      {...props}
    >
      <DialogContent
        aria-label={title}
        className={classNames(
          dialog.dialog.base,
          dialog.dialog.mobilePositionSize[mobilePosition].base,
          dialog.dialog.mobilePositionSize[mobilePosition][size],
          dialog.dialog.desktopPositionSize[desktopPosition].base,
          dialog.dialog.desktopPositionSize[desktopPosition][size],
          className
        )}
      >
        {children}
      </DialogContent>
    </DialogOverlay>
  )
}
