import classNames from 'classnames'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import { SectionProps } from '../Section/Section'
import {
  ActionIconProps,
  ClassNameProps,
  ContentReactProps,
  OnClickVoidProps,
  TitleReactProps,
} from '../type'

type SectionDescriptionItemProps = ContentReactProps &
  TitleReactProps &
  ClassNameProps

type SectionListItemWithActionProps = SectionProps & ActionIconProps

export const SectionListItem: React.FC<SectionProps> = ({
  className,
  children,
  backgroundColor = 'gray-700',
}) => {
  return (
    <div
      className={classNames(
        className,
        `flex items-center min-h-14 px-4 lg:px-5 text-white bg-${backgroundColor}`
      )}
    >
      {children}
    </div>
  )
}

export const SectionListItemWithButton: React.FC<OnClickVoidProps> = ({
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

export const SectionListItemWithAction: React.FC<SectionListItemWithActionProps> =
  ({ children, actionIcon, backgroundColor, className }) => (
    <SectionListItem
      className={classNames('justify-between space-x-4', className)}
      backgroundColor={backgroundColor}
    >
      {children}
      {actionIcon}
    </SectionListItem>
  )

export const SectionDescriptionItem: React.FC<SectionDescriptionItemProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col pb-2 space-y-1 text-white border-b border-gray-300',
        className
      )}
    >
      <dt className="text-sm">{title}</dt>
      <dd>{content}</dd>
    </div>
  )
}
