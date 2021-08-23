import classNames from 'classnames'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework/theme/ThemeContext'
import { ClassNameProps } from '../../types'

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
   * On Click handler for the button.
   */
  onClick: () => void
}

export const SectionListItem: React.FC<ClassNameProps> = ({
  className,
  children,
  ...props
}) => {
  const { section } = useTheme()
  return (
    <div
      className={classNames(
        className,
        section.listItem.base,
        section.listItem.normal
      )}
      {...props}
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
  const { section } = useTheme()
  return (
    <button onClick={onClick} className="block w-full">
      <SectionListItem
        className={classNames(
          section.listItemWithButton.base,
          section.listItemWithButton.normal,
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
  ({ children, action, className, ...props }) => {
    const { section } = useTheme()
    return (
      <SectionListItem
        className={classNames(
          section.listItemWithAction.base,
          section.listItemWithAction.normal,
          className
        )}
        {...props}
      >
        {children}
        <div className={section.listItemWithAction.action.base}>{action}</div>
      </SectionListItem>
    )
  }

export const SectionDescriptionItem: React.FC<SectionDescriptionItemProps> = ({
  title,
  content,
  className,
}) => {
  const { section } = useTheme()
  return (
    <dl className={classNames(section.descriptionItem.base, className)}>
      <dt className={section.descriptionItem.title.base}>{title}</dt>
      <dd>{content}</dd>
    </dl>
  )
}
