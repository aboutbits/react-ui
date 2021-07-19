import classNames from 'classnames'
import { ReactNode } from 'react'

const SectionHeader: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <div className={classNames('px-4 lg:px-5 pt-5 pb-3 bg-white', className)}>
    {children}
  </div>
)

const SectionTitle: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <h1 className={classNames(`text-xs font-bold uppercase`, className)}>
    {children}
  </h1>
)

export const SectionHeaderWithAction: React.FC<{
  title: ReactNode
  actionIcon: ReactNode
  className?: string
  classNameTitle?: string
}> = ({ title, actionIcon, className, classNameTitle }) => (
  <SectionHeader>
    <div className={classNames(`flex justify-between items-center`, className)}>
      <SectionTitle className={classNameTitle}>{title}</SectionTitle>
      {actionIcon}
    </div>
  </SectionHeader>
)

export { SectionHeader, SectionTitle }
