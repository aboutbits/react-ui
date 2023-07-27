import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export enum DialogHeaderRowLayout {
  Stretch = 'STRETCH',
  SpaceBetween = 'SPACE_BETWEEN',
  Start = 'START',
  Center = 'CENTER',
  End = 'END',
}

export function DialogHeaderRow({
  layout = DialogHeaderRowLayout.SpaceBetween,
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
        className,
      )}
    >
      {children}
    </div>
  )
}
