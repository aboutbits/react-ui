import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionDescriptionItemTitleProps = ClassNameProps & {
  children?: ReactNode
}

export function SectionDescriptionItemTitle({
  children,
  className,
}: SectionDescriptionItemTitleProps) {
  const { section } = useTheme()
  return (
    <dt className={classNames(section.descriptionItemTitle.base, className)}>
      {children}
    </dt>
  )
}

export type SectionDescriptionItemProps = ClassNameProps & {
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

export function SectionDescriptionItem({
  title,
  content,
  className,
  hideIfEmpty = false,
}: SectionDescriptionItemProps) {
  const { section } = useTheme()

  return (
    <>
      {((hideIfEmpty && content) || !hideIfEmpty) && (
        <dl className={classNames(section.descriptionItem.base, className)}>
          <SectionDescriptionItemTitle>{title}</SectionDescriptionItemTitle>
          <dd>{content}</dd>
        </dl>
      )}
    </>
  )
}
