import { Dialog as HeadlessDialog } from '@headlessui/react'
import classNames from 'classnames'
import { ReactElement, useRef } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { DialogContext } from '../DialogContext'
import { DialogPosition, DialogSize } from '../types'

// see https://github.com/tailwindlabs/headlessui/issues/1394
type DialogComponentType = Parameters<typeof HeadlessDialog>[0]

export type DialogProps = ClassNameProps &
  DialogComponentType & {
    size?: DialogSize
    children?: ReactElement
    mobilePosition?: DialogPosition
    desktopPosition?: DialogPosition
    'aria-label'?: string
    overlayClassName?: string
  }

export function Dialog({
  size = DialogSize.md,
  mobilePosition = DialogPosition.center,
  desktopPosition = DialogPosition.center,
  'aria-label': ariaLabel,
  className,
  overlayClassName,
  children,
  ...props
}: DialogProps): ReactElement {
  const { dialog } = useTheme()
  const initialFocusRef = useRef<HTMLDivElement>(null)

  return (
    <DialogContext.Provider value={{ size }}>
      <HeadlessDialog
        className={classNames(
          dialog.overlay.base,
          dialog.overlay.mobilePosition[mobilePosition],
          dialog.overlay.desktopPosition[desktopPosition],
          overlayClassName
        )}
        initialFocus={initialFocusRef}
        {...props}
      >
        <HeadlessDialog.Panel
          ref={initialFocusRef}
          aria-label={ariaLabel}
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
        </HeadlessDialog.Panel>
      </HeadlessDialog>
    </DialogContext.Provider>
  )
}
