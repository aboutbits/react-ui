import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export enum SectionHeaderRowLayout {
  stretch = 'stretch',
  spaceBetween = 'spaceBetween',
  start = 'start',
  center = 'center',
  end = 'end',
}

export function SectionHeaderRow({
  layout = SectionHeaderRowLayout.spaceBetween,
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
        className,
      )}
    >
      {children}
    </div>
  )
}
