import { DialogContent, DialogOverlay, DialogOverlayProps } from '@reach/dialog'
import classNames from 'classnames'
import { ReactElement, useRef } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { DialogContext } from './DialogContext'
import { DialogPosition, DialogSize } from './types'

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
  const initialFocusRef = useRef<HTMLDivElement>(null)

  return (
    <DialogContext.Provider value={{ size }}>
      <DialogOverlay
        className={classNames(
          dialog.overlay.base,
          dialog.overlay.mobilePosition[mobilePosition],
          dialog.overlay.desktopPosition[desktopPosition]
        )}
        initialFocusRef={initialFocusRef}
        {...props}
      >
        <DialogContent
          ref={initialFocusRef}
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
    </DialogContext.Provider>
  )
}
