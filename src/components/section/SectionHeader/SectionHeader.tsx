import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

type SectionHeaderProps = ClassNameProps

type SectionHeaderWithActionProps = {
  /**
   * Section title
   */
  title: ReactNode
  /**
   * The react node will be pushed to the right side of the section header.
   */
  action: ReactNode
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
}) => {
  const { section } = useTheme()
  return (
    <div className={classNames(section.sectionHeader.base, className)}>
      {children}
    </div>
  )
}

export const SectionTitle: React.FC = ({ children }) => (
  <h1 className="text-xs font-bold uppercase text-section-title">{children}</h1>
)

export const SectionHeaderWithAction: React.FC<SectionHeaderWithActionProps> =
  ({ title, action }) => (
    <SectionHeader>
      <div className="flex justify-between items-center space-x-4">
        <SectionTitle>{title}</SectionTitle>
        {action}
      </div>
    </SectionHeader>
  )
