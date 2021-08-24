import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
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
