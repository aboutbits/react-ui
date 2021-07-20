import classNames from 'classnames'
import { ReactNode } from 'react'

export const SectionHeader: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <div className={classNames('px-4 lg:px-5 pt-5 pb-3 bg-white', className)}>
    {children}
  </div>
)

export const SectionTitle: React.FC = ({ children }) => (
  <h1 className="text-xs font-bold uppercase">{children}</h1>
)

export const SectionHeaderWithAction: React.FC<{
  title: ReactNode
  actionIcon: ReactNode
}> = ({ title, actionIcon }) => (
  <SectionHeader>
    <div className="flex justify-between items-center">
      <SectionTitle>{title}</SectionTitle>
      {actionIcon}
    </div>
  </SectionHeader>
)
