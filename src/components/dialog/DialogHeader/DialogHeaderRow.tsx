import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export enum DialogHeaderRowLayout {
  stretch = 'stretch',
  spaceBetween = 'spaceBetween',
  start = 'start',
  center = 'center',
  end = 'end',
}

export function DialogHeaderRow({
  layout = DialogHeaderRowLayout.spaceBetween,
  children,
  className,
}: {
  layout?: DialogHeaderRowLayout
  children?: ReactNode
} & ClassNameProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div
      className={classNames(
        dialog.headerRow.base,
        dialog.headerRow.layout[layout],
        className
      )}
    >
      {children}
    </div>
  )
}
