import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DescriptionItemTitleProps = ClassNameProps & {
  children?: ReactNode
}

export function DescriptionItemTitle({
  children,
  className,
}: DescriptionItemTitleProps) {
  const { content } = useTheme()
  return (
    <dt className={classNames(content.descriptionItemTitle.base, className)}>
      {children}
    </dt>
  )
}

export type DescriptionItemProps = ClassNameProps & {
  /**
   * Defines the content of the section description item.
   * Will be placed inside dl.
   **/
  content: ReactNode
  /**
   * Defines the title of section description item.
   * Will be placed inside dt.
   **/
  title: ReactNode
  /**
   * Defines if the component appears or not depending on if the content is empty (null) or not.
   **/
  hideIfEmpty?: boolean
}

export function DescriptionItem({
  title,
  content,
  className,
  hideIfEmpty = false,
}: DescriptionItemProps) {
  const { content: contentTheme } = useTheme()

  return (
    <>
      {((hideIfEmpty && content) || !hideIfEmpty) && (
        <dl
          className={classNames(contentTheme.descriptionItem.base, className)}
        >
          <DescriptionItemTitle>{title}</DescriptionItemTitle>
          <dd>{content}</dd>
        </dl>
      )}
    </>
  )
}
