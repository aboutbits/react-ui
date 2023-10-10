import { ReactElement, ReactNode } from 'react'
import { ClassNameProps, Tone } from '../../types'
import { ContentMessageContainer } from './ContentMessageContainer'
import {
  ContentMessageIcon,
  ContentMessageIconProps,
} from './ContentMessageIcon'
import { ContentMessageText } from './ContentMessageText'
import { ContentMessageTitle } from './ContentMessageTitle'

export type ContentMessageProps = ClassNameProps &
  Partial<Pick<ContentMessageIconProps, 'icon'>> & {
    tone?: Tone
    title?: ReactNode
    text?: ReactNode
    iconProps?: Partial<ContentMessageIconProps>
  }

/**
 * This component renders a message with icon in the given tone. It can
 * be used to create a warning or error message inside a section.
 */
export function ContentMessage({
  className,
  icon,
  title,
  text,
  tone = Tone.Primary,
  iconProps,
}: ContentMessageProps): ReactElement {
  return (
    <ContentMessageContainer className={className}>
      {icon && <ContentMessageIcon icon={icon} tone={tone} {...iconProps} />}
      {Boolean(title) && (
        <ContentMessageTitle tone={tone}>{title}</ContentMessageTitle>
      )}
      {Boolean(text) && (
        <ContentMessageText tone={tone}>{text}</ContentMessageText>
      )}
    </ContentMessageContainer>
  )
}
