import { ReactNode } from 'react'
import { ClassNameProps } from '../../types'
import { DescriptionItemContainer } from './DescriptionItemContainer'
import { DescriptionItemContent } from './DescriptionItemContent'
import { DescriptionItemTitle } from './DescriptionItemTitle'

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
  return (
    <>
      {((hideIfEmpty && content) || !hideIfEmpty) && (
        <DescriptionItemContainer className={className}>
          <DescriptionItemTitle>{title}</DescriptionItemTitle>
          <DescriptionItemContent>{content}</DescriptionItemContent>
        </DescriptionItemContainer>
      )}
    </>
  )
}
