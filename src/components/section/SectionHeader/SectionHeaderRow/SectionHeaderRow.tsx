import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../../framework'
import { ClassNameProps } from '../../../types'
import { SectionHeaderRowLayout } from './types'

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
        className,
      )}
    >
      {children}
    </div>
  )
}
