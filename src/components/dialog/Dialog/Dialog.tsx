import { Dialog as HeadlessDialog } from '@headlessui/react'
import classNames from 'classnames'
import { ReactElement, useRef } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { DialogContext } from '../DialogContext'
import { DialogPosition, DialogSize } from '../types'

export type DialogProps = ClassNameProps & {
  isOpen?: boolean
  onDismiss?: () => void
  initialFocusRef?: React.RefObject<HTMLDivElement>
  size?: DialogSize
  children?: ReactElement
  mobilePosition?: DialogPosition
  desktopPosition?: DialogPosition
  'aria-label'?: string
  overlayClassName?: string
}

export function Dialog({
  isOpen,
  onDismiss,
  initialFocusRef: initialFocusRefProp,
  size = DialogSize.Md,
  mobilePosition = DialogPosition.Center,
  desktopPosition = DialogPosition.Center,
  'aria-label': ariaLabel,
  className,
  overlayClassName,
  children,
  ...props
}: DialogProps): ReactElement {
  const { dialog } = useTheme()
  const nullRef = useRef<HTMLDivElement>(null)
  const initialFocusRef = initialFocusRefProp ?? nullRef

  return (
    <DialogContext.Provider value={{ size }}>
      <HeadlessDialog
        open={isOpen ?? true}
        className={classNames(
          dialog.overlay.base,
          dialog.overlay.mobilePosition[mobilePosition],
          dialog.overlay.desktopPosition[desktopPosition],
          overlayClassName,
        )}
        initialFocus={initialFocusRef}
        onClose={onDismiss ?? (() => undefined)}
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
            className,
          )}
        >
          {children}
        </HeadlessDialog.Panel>
      </HeadlessDialog>
    </DialogContext.Provider>
  )
}
