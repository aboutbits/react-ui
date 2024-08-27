import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import classNames from 'classnames'
import { MouseEventHandler, forwardRef } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type DialogListItemButtonProps = ClassNameProps & {
  /**
   * On click handler for the button.
   */
  onClick: MouseEventHandler
}

export const DialogListItemButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<DialogListItemButtonProps>
>(function DialogListItemButton(
  { children, onClick, className, ...props },
  ref,
) {
  const { dialog } = useTheme()

  return (
    <button
      onClick={onClick}
      className={classNames(
        dialog.listItemButton.base,
        dialog.listItem.base,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <IconKeyboardArrowRight
        width="24"
        height="24"
        className={dialog.listItemButton.icon}
      />
    </button>
  )
})
