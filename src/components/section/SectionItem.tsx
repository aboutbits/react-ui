import classnames from 'classnames'
import { ReactNode } from 'react'

export enum SectionDescriptionItemVariant {
  loaded = 'loaded',
  error = 'error',
}

const variantStyles: Record<SectionDescriptionItemVariant, string> = {
  [SectionDescriptionItemVariant.loaded]: 'border-gray text-white',
  [SectionDescriptionItemVariant.error]: 'border-critical text-critical',
}

export const SectionListItem: React.FC<{
  className?: string
  tone?: string
}> = ({ className, children, tone = 'gray-700' }) => {
  return (
    <div
      className={classnames(
        className,
        `flex items-center min-h-14 px-4 lg:px-5 text-white bg-${tone}`
      )}
    >
      {children}
    </div>
  )
}

export const SectionDescriptionItem: React.FC<{
  title: ReactNode
  content: ReactNode
  variant?: SectionDescriptionItemVariant
}> = ({ title, content, variant = SectionDescriptionItemVariant.loaded }) => {
  return (
    <div
      className={classnames(
        variantStyles[variant],
        'flex flex-col space-y-1 pb-2 border-b border-gray-300 text-white'
      )}
    >
      <dt className="text-sm">{title}</dt>
      <dd>{content}</dd>
    </div>
  )
}
