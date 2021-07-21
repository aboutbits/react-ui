import classNames from 'classnames'
import { ReactNode } from 'react'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import { SectionProps } from '../Section/Section'

export const SectionListItem: React.FC<SectionProps> = ({
  className,
  children,
  tone = 'gray-700',
}) => {
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

export const SectionListItemWithButton: React.FC<{ onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="block w-full">
      <SectionListItem className="justify-between space-x-4 hover:bg-gray-600">
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

export const SectionDescriptionItem: React.FC<{
  title: ReactNode
  content: ReactNode
}> = ({ title, content }) => {
  return (
    <div className="flex flex-col pb-2 space-y-1 text-white border-b border-gray-300">
      <dt className="text-sm">{title}</dt>
      <dd>{content}</dd>
    </div>
  )
}
