import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionHeaderProps = ClassNameProps & {
  increasedBottomSpace?: boolean | string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  increasedBottomSpace,
  className,
  children,
}) => {
  const { section } = useTheme()

  return (
    <div
      className={classNames(
        section.header.base,
        increasedBottomSpace === true
          ? section.header.increasedBottomSpace.enabled
          : typeof increasedBottomSpace === 'string'
          ? (section.header.increasedBottomSpace as Record<string, string>)[
              increasedBottomSpace
            ]
          : section.header.defaultBottomSpace,
        className
      )}
    >
      {children}
    </div>
  )
}
