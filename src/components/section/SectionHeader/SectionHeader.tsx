import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { ClassNameProps } from '../../types'

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
}) => (
  <div
    className={classNames(
      `px-4 lg:px-5 pt-5 pb-3 bg-section-header`,
      className
    )}
  >
    {children}
  </div>
)

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
