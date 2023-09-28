import { ReactNode } from 'react'
import { ClassNameProps } from '../../types'
import { DescriptionItemContainer } from './DescriptionItemContainer'
import {
  DescriptionItemContent,
  DescriptionItemContentProps,
} from './DescriptionItemContent'
import { DescriptionItemTitle } from './DescriptionItemTitle'

export type DescriptionItemProps = ClassNameProps & {
  /**
   * Defines the title of section description item.
   * Will be placed inside dt.
   **/
  title: ReactNode
  /**
   * Defines the props for the description item content.
   */
  contentProps?: Omit<DescriptionItemContentProps, 'children'>
} & (
    | {
        /**
         * Defines the content of the section description item.
         * Will be placed inside dl.
         **/
        content: Exclude<ReactNode, null | undefined>
        hideIfEmpty?: false
      }
    | {
        /**
         * Defines the content of the section description item.
         * Will be placed inside dl.
         **/
        content: ReactNode
        /**
         * Defines if the component appears or not depending on if the content is empty (null) or not.
         **/
        hideIfEmpty: true
      }
  )

/**
 * The DescriptionItem displays read only information with HTML description list element (`dl`) tag.
 * The `contentProps.alignVertical` option is useful to align the content to the input field when the component is placed inside a form.
 */
export function DescriptionItem({
  title,
  className,
  contentProps,
  ...props
}: DescriptionItemProps) {
  return (
    <>
      {((props.hideIfEmpty && props.content) || !props.hideIfEmpty) && (
        <DescriptionItemContainer className={className}>
          <DescriptionItemTitle>{title}</DescriptionItemTitle>
          <DescriptionItemContent {...contentProps}>
            {props.content}
          </DescriptionItemContent>
        </DescriptionItemContainer>
      )}
    </>
  )
}
