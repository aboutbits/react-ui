import Link from 'next/link'
import { ReactNode } from 'react'
import classnames from 'classnames'

const SectionHeader: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <div className={classnames('px-4 lg:px-5 pt-5 pb-3 bg-white', className)}>
    {children}
  </div>
)

const SectionTitle: React.FC = ({ children }) => (
  <h1 className="text-xs font-bold uppercase">{children}</h1>
)

const SectionHeaderWithAction: React.FC<{
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

const SectionHeaderActionLink: React.FC<{
  href: string
}> = ({ href, children }) => (
  <Link href={href}>
    <a className="flex justify-center items-center w-6 h-6 hover:bg-gray-50 active:bg-gray-50 rounded-full">
      <div className="p-0.5 rounded-full border-2">{children}</div>
    </a>
  </Link>
)

export {
  SectionHeader,
  SectionHeaderWithAction,
  SectionHeaderActionLink,
  SectionTitle,
}
