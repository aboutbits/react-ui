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

const ConfirmationDialog: React.FC<{
  isOpen: boolean
  disableDismiss?: boolean
  disableConfirm?: boolean
  onDismiss: () => void
  onConfirm: () => void
  variant?: ConfirmationDialogVariant
  title: string
  body: ReactNode
  confirmButtonText: ReactNode
  dismissButtonText?: ReactNode
}> = ({
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
        'min-w-dialog max-w-min bg-white px-5 pt-5 pb-2 top-1/2 left-1/2 outline-none absolute transform -translate-x-1/2 -translate-y-1/2'
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
