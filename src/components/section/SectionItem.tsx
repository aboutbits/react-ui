import classNames from 'classnames'
import { ReactNode } from 'react'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'

export enum SectionDescriptionItemVariant {
  loaded = 'loaded',
  error = 'error',
}

export const SectionListItem: React.FC<{
  className?: string
  tone?: string
}> = ({ className, children, tone = 'gray-700' }) => {
  return (
    <div
      className={classNames(
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
  className?: string
}> = ({ title, content, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col space-y-1 pb-2 border-b border-gray text-white',
        className
      )}
    >
      <dt className="text-sm">{title}</dt>
      <dd>{content}</dd>
    </div>
  )
}

export const SectionListItemWithButton: React.FC<{
  onClick: () => void
  className?: string
}> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className="block w-full">
      <SectionListItem
        className={classNames(
          `justify-between space-x-4 hover:bg-gray-600`,
          className
        )}
      >
        {children}
        <IconKeyboardArrowRight
          width="24"
          height="24"
          className="fill-current"
        />
      </SectionListItem>
    </button>
  )
}

export const SectionListItemWithAction: React.FC<{ actionIcon: ReactNode }> = ({
  children,
  actionIcon,
}) => {
  return (
    <SectionListItem className="justify-between space-x-4">
      {children}
      {actionIcon}
    </SectionListItem>
  )
}
