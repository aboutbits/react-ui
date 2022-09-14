import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionHeaderAreaProps = ClassNameProps & { children: ReactNode }

export function SectionHeaderArea({
  className,
  children,
}: SectionHeaderAreaProps) {
  const { section } = useTheme()

  return (
    <div className={classNames(section.headerArea.base, className)}>
      {children}
    </div>
  )
}
