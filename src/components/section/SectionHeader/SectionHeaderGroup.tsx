import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export enum SectionHeaderGroupSpacing {
  Sm = 'SM',
  Md = 'MD',
}

export function SectionHeaderGroup({
  spacing = SectionHeaderGroupSpacing.Sm,
  children,
  className,
}: {
  spacing?: SectionHeaderGroupSpacing
  children?: ReactNode
} & ClassNameProps): ReactElement {
  const { section } = useTheme()

  return (
    <div
      className={classNames(
        section.headerGroup.base,
        section.headerGroup.spacing[spacing],
        className,
      )}
    >
      {children}
    </div>
  )
}
