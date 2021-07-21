import Dialog from '@reach/dialog'
import classnames from 'classnames'
import { ReactNode } from 'react'
import { Button, Size, Tone, Variant } from '../../button/Button'

export enum ConfirmationDialogVariant {
  confirm = 'confirm',
  critical = 'critical',
}

const variantStyles: Record<ConfirmationDialogVariant, string> = {
  [ConfirmationDialogVariant.confirm]: 'text-black',
  [ConfirmationDialogVariant.critical]: 'text-critical',
}

const variantConfirmationButtonTone: Record<ConfirmationDialogVariant, Tone> = {
  [ConfirmationDialogVariant.confirm]: Tone.primary,
  [ConfirmationDialogVariant.critical]: Tone.critical,
}

type ConfirmDialogProps = {
  /**
   * Defines if the dialog is open.
   * */
  isOpen: boolean
  /**
   * Defines if the entire dialog is dismissible. This includes escaping, clicking the button, and clicking outside of the dialog.
   * */
  disableDismiss?: boolean
  /**
   * Defines if the confirmation button is disabled. It is
   * */
  disableConfirm?: boolean
  /**
   * Defines which action should be executed on dismissing.
   * */
  onDismiss: () => void
  /**
   * Defines which action should be executed on confirmation.
   * */
  onConfirm: () => void
  /**
   * Defines the variant of the dialog.
   * */
  variant?: ConfirmationDialogVariant
  /**
   * Defines the title of the dialog.
   * */
  title: string
  /**
   * Further information can be placed in the dialog.
   * */
  body: ReactNode
  /**
   * Defines the text for the confirmation button in the dialog.
   * */
  confirmButtonText: ReactNode
  /**
   * Defines the text for the conformation button in the dialog.
   * */
  dismissButtonText?: ReactNode
  /**
   * Adjusting individual the style with any css class.
   * */
  className?: string
}

const ConfirmationDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  disableDismiss,
  disableConfirm,
  onDismiss,
  onConfirm,
  variant = ConfirmationDialogVariant.confirm,
  title,
  body,
  confirmButtonText,
  dismissButtonText,
  className,
}) => {
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={() => {
        if (!disableDismiss) {
          onDismiss()
        }
      }}
      aria-label={title}
      className={classnames(
        'min-w-dialog max-w-min bg-white px-5 pt-5 pb-2 top-1/2 left-1/2 outline-none absolute transform -translate-x-1/2 -translate-y-1/2',
        className
      )}
    >
      <h2 className={classnames(variantStyles[variant], 'text-xl')}>{title}</h2>
      <p className="mt-4">{body}</p>
      <div className="mt-5 space-x-4 text-right">
        {dismissButtonText && (
          <Button
            variant={Variant.ghost}
            tone={Tone.secondary}
            size={Size.sm}
            disabled={disableDismiss}
            onClick={onDismiss}
          >
            {dismissButtonText}
          </Button>
        )}
        <Button
          variant={Variant.solid}
          size={Size.sm}
          tone={variantConfirmationButtonTone[variant]}
          disabled={disableConfirm}
          onClick={onConfirm}
        >
          {confirmButtonText}
        </Button>
      </div>
    </Dialog>
  )
}

export { ConfirmationDialog }
