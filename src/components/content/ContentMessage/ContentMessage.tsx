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

export function ContentMessage({
  className,
  icon,
  title,
  text,
  tone = Tone.primary,
  iconProps,
}: ContentMessageProps): ReactElement {
  return (
    <ContentMessageContainer className={className}>
      {icon && <ContentMessageIcon icon={icon} tone={tone} {...iconProps} />}
      {title && <ContentMessageTitle tone={tone}>{title}</ContentMessageTitle>}
      {text && <ContentMessageText tone={tone}>{text}</ContentMessageText>}
    </ContentMessageContainer>
  )
}
