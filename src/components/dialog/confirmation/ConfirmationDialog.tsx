import { ReactElement, ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooterActions,
  DialogFooterArea,
  DialogHeader,
  DialogProps,
} from '../'
import { Button } from '../../button'
import { Variant } from '../../button/types'
import { Tone } from '../../types'

export enum ConfirmationDialogVariant {
  confirm = 'confirm',
  critical = 'critical',
}

const variantConfirmationButtonTone: Record<ConfirmationDialogVariant, Tone> = {
  [ConfirmationDialogVariant.confirm]: Tone.primary,
  [ConfirmationDialogVariant.critical]: Tone.critical,
}

type ConfirmDialogProps = Omit<DialogProps, 'children'> & {
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
  variant = ConfirmationDialogVariant.confirm,
  confirmButtonText,
  dismissButtonText,
  body,
  ...props
}: ConfirmDialogProps): ReactElement {
  return (
    <Dialog {...props}>
      <>
        <DialogHeader title={props.title} />
        <DialogContent>{body}</DialogContent>
        <DialogFooterArea>
          <DialogFooterActions>
            {dismissButtonText && (
              <Button
                variant={Variant.ghost}
                tone={Tone.neutral}
                disabled={disableDismiss}
                onClick={onDismiss}
              >
                {dismissButtonText}
              </Button>
            )}
            <Button
              variant={Variant.solid}
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
