import Dialog from '@reach/dialog'
import classnames from 'classnames'
import { ReactNode } from 'react'
import { Button, Size, Variant } from '../../button/Button'
import styles from './ConfirmationDialog.module.css'

export enum ConfirmationDialogVariant {
  confirm = 'confirm',
  delete = 'delete',
}

const variantStyles: Record<ConfirmationDialogVariant, string> = {
  [ConfirmationDialogVariant.confirm]: 'text-black',
  [ConfirmationDialogVariant.delete]: 'text-critical',
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
        styles['dialog-position'],
        'min-w-dialog max-w-min bg-white px-5 pt-5 pb-2'
      )}
    >
      <h2 className={classnames(variantStyles[variant], 'text-xl')}>{title}</h2>
      <p className="mt-4">{body}</p>
      <div className="mt-5 space-x-4 text-right">
        {dismissButtonText && (
          <Button
            //variant was fourth
            variant={Variant.solid}
            size={Size.sm}
            disabled={disableDismiss}
            onClick={onDismiss}
          >
            {dismissButtonText}
          </Button>
        )}
        <Button
          //variant was fourth
          variant={Variant.solid}
          size={Size.sm}
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
