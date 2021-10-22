import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type SectionDescriptionItemProps = ClassNameProps & {
  /**
   * Defines the content of the section description item.
   * Will be placed inside <dl>.
   **/
  content: ReactNode
  /**
   * Defines the title of section description item.
   * Will be placed inside <dt>.
   **/
  title: ReactNode
  /**
   * Defines if the component appears or not depending on if the content is empty (null) or not.
   **/
  hideIfEmpty?: boolean
}

export const SectionDescriptionItem: React.FC<SectionDescriptionItemProps> = ({
  title,
  content,
  className,
  hideIfEmpty = false,
}) => {
  const { section } = useTheme()

  return (
    <>
      {((hideIfEmpty && content) || !hideIfEmpty) && (
        <dl className={classNames(section.descriptionItem.base, className)}>
          <dt className={section.descriptionItem.title.base}>{title}</dt>
          <dd>{content}</dd>
        </dl>
      )}
    </>
  )
}
