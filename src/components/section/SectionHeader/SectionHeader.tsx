import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionHeaderProps = ClassNameProps & {
  increasedBottomSpacing?: boolean
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  increasedBottomSpacing = false,
  children,
}) => {
  const { section } = useTheme()

  return (
    <div
      className={classNames(
        section.header.base,
        increasedBottomSpacing ? section.header.increasedBottomSpacing : null,
        className
      )}
    >
      {children}
    </div>
  )
}
