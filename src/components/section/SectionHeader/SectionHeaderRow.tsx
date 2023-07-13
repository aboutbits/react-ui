import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export enum SectionHeaderRowLayout {
  Stretch = 'STRETCH',
  SpaceBetween = 'SPACE_BETWEEN',
  Start = 'START',
  Center = 'CENTER',
  End = 'END',
}

export function SectionHeaderRow({
  layout = SectionHeaderRowLayout.SpaceBetween,
  children,
  className,
}: {
  layout?: SectionHeaderRowLayout
  children?: ReactNode
} & ClassNameProps): ReactElement {
  const { section } = useTheme()

  return (
    <div
      className={classNames(
        section.headerRow.base,
        section.headerRow.layout[layout],
        className
      )}
    >
      {children}
    </div>
  )
}
