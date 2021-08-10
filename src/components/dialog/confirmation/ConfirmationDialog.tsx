import Dialog from '@reach/dialog'
import classnames from 'classnames'
import { ReactNode } from 'react'
import { Button, Size, Tone, Variant } from '../../button/Button'
import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../../types'

export enum ConfirmationDialogVariant {
  confirm = 'confirm',
  critical = 'critical',
}

const variantConfirmationButtonTone: Record<ConfirmationDialogVariant, Tone> = {
  [ConfirmationDialogVariant.confirm]: Tone.primary,
  [ConfirmationDialogVariant.critical]: Tone.critical,
}

type ConfirmDialogProps = ClassNameProps & {
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
  const { dialog } = useTheme()
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
        dialog.confirmation.base,
        dialog.confirmation.normal,
        className
      )}
    >
      <h2
        className={classnames(
          dialog.confirmation.title.variant[variant],
          dialog.confirmation.title.base
        )}
      >
        {title}
      </h2>
      <div>{body}</div>
      <div className="space-x-4 text-right">
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
