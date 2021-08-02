import classNames from 'classnames'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import { ReactNode } from 'react'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

type SectionListItemProps = ClassNameProps & {
  /**
   * Defines the color of the background. It uses the tailwind background notation `bg-${backgroundColor}` under the hood.
   * */
  backgroundColor?: string
}

type SectionDescriptionItemProps = ClassNameProps & {
  /**
   * Defines the content of the section description item.
   * Will be placed inside <dl>.
   */
  content: ReactNode
  /**
   * Defines the title of section description item.
   * Will be placed inside <dt>.
   */
  title: ReactNode
}

type SectionListItemWithActionProps = ClassNameProps & {
  /**
   * The react node will be pushed to the right side of the section list item.
   */
  action: ReactNode
}

type SectionListItemWithButton = ClassNameProps & {
  /**
   * On Click handler for the button
   */
  onClick: () => void
}

export const SectionListItem: React.FC<SectionListItemProps> = ({
  className,
  children,
  backgroundColor = 'bg-gray-700',
}) => {
  const { section } = useTheme()
  return (
    <div
      className={classNames(
        className,
        section.sectionListItem.base,
        `bg-${backgroundColor}`
      )}
    >
      {children}
    </div>
  )
}

export const SectionListItemWithButton: React.FC<SectionListItemWithButton> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className="block w-full">
      <SectionListItem
        className={classNames(
          'justify-between space-x-4 hover:bg-section-list-item',
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

export const SectionListItemWithAction: React.FC<SectionListItemWithActionProps> =
  ({ children, action, className }) => {
    const { section } = useTheme()
    return (
      <SectionListItem
        className={classNames(
          section.sectionListItemWithAction.base,
          className
        )}
      >
        {children}
        <div className={section.sectionListItemWithAction.action}>{action}</div>
      </SectionListItem>
    )
  }

export const SectionDescriptionItem: React.FC<SectionDescriptionItemProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <dl
      className={classNames(
        'flex flex-col pb-2 space-y-1 text-section-description-item border-b border-section-description-item',
        className
      )}
    >
      <dt className="text-sm">{title}</dt>
      <dd>{content}</dd>
    </dl>
  )
}
