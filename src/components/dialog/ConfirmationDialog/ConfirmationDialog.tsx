import { ReactElement, ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooterActions,
  DialogFooterArea,
  DialogHeader,
  DialogProps,
} from '../'
import { Button, ButtonVariant } from '../../button'
import { Tone } from '../../types'
import { ConfirmationDialogVariant } from './types'

const variantConfirmationButtonTone: Record<ConfirmationDialogVariant, Tone> = {
  [ConfirmationDialogVariant.Confirm]: Tone.Primary,
  [ConfirmationDialogVariant.Critical]: Tone.Critical,
}

export type ConfirmDialogProps = Omit<DialogProps, 'children'> & {
  /**
   * Defines if the entire dialog is dismissible. This includes escaping, clicking the button, and clicking outside of the dialog.
   **/
  disableDismiss?: boolean
  /**
   * Defines if the confirmation button is disabled. It is
   **/
  disableConfirm?: boolean
  /**
   * Defines which action should be executed on dismissing.
   **/
  onDismiss: () => void
  /**
   * Defines which action should be executed on confirmation.
   **/
  onConfirm: () => void
  /**
   * Defines the variant of the dialog.
   **/
  variant?: ConfirmationDialogVariant
  /**
   * The title of the dialog.
   **/
  title?: ReactNode
  /**
   * Further information can be placed in the dialog.
   **/
  body: ReactNode
  /**
   * Defines the text for the confirmation button in the dialog.
   **/
  confirmButtonText: ReactNode
  /**
   * Defines the text for the conformation button in the dialog.
   **/
  dismissButtonText?: ReactNode
}

export function ConfirmationDialog({
  disableDismiss,
  disableConfirm,
  onDismiss,
  onConfirm,
  variant = ConfirmationDialogVariant.Confirm,
  confirmButtonText,
  dismissButtonText,
  title,
  body,
  ...props
}: ConfirmDialogProps): ReactElement {
  return (
    <Dialog {...props}>
      <>
        <DialogHeader title={title} />
        <DialogContent>{body}</DialogContent>
        <DialogFooterArea>
          <DialogFooterActions>
            {Boolean(dismissButtonText) && (
              <Button
                variant={ButtonVariant.Ghost}
                tone={Tone.Neutral}
                disabled={disableDismiss}
                onClick={onDismiss}
              >
                {dismissButtonText}
              </Button>
            )}
            <Button
              variant={ButtonVariant.Solid}
              tone={variantConfirmationButtonTone[variant]}
              disabled={disableConfirm}
              onClick={onConfirm}
            >
              {confirmButtonText}
            </Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
