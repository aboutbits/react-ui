import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionHeaderProps = ClassNameProps

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
}) => {
  const { section } = useTheme()

  return (
    <div
      className={classNames(
        section.header.base,
        section.header.normal,
        className
      )}
    >
      {children}
    </div>
  )
}
