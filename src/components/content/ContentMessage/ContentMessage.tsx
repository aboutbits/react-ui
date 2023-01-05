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
  Partial<Pick<ContentMessageIconProps, 'icon' | 'iconStyle'>> & {
    tone?: Tone
    title?: ReactNode
    text?: ReactNode
  }

export function ContentMessage({
  className,
  icon,
  iconStyle,
  title,
  text,
  tone = Tone.primary,
}: ContentMessageProps): ReactElement {
  return (
    <ContentMessageContainer className={className}>
      {icon && (
        <ContentMessageIcon icon={icon} iconStyle={iconStyle} tone={tone} />
      )}
      {title && <ContentMessageTitle tone={tone}>{title}</ContentMessageTitle>}
      {text && <ContentMessageText tone={tone}>{text}</ContentMessageText>}
    </ContentMessageContainer>
  )
}
