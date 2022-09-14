import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'

export type DialogListItemProps = {
  className?: string
  children?: ReactNode
}

export function DialogListItem({
  className,
  children,
}: DialogListItemProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div className={classNames(className, dialog.listItem.base)}>
      {children}
    </div>
  )
}
