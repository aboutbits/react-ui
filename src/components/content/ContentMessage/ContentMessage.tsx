import classNames from 'classnames'
import { ComponentType, ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps, IconProps, Tone } from '../../types'

export type ContentMessageProps = ClassNameProps & {
  icon?: ComponentType<IconProps>
  tone?: Tone
  title?: ReactNode | string
  text?: ReactNode | string
}

export function ContentMessage({
  className,
  icon: Icon,
  title,
  text,
  tone = Tone.primary,
}: ContentMessageProps): ReactElement {
  const { content } = useTheme()

  return (
    <div className={classNames(content.message.base, className)}>
      {Icon && (
        <div
          className={classNames(
            content.message.iconContainer.base,
            content.message.iconContainer.tone[tone]
          )}
        >
          <Icon
            className={classNames(
              content.message.icon.base,
              content.message.icon.tone[tone]
            )}
          />
        </div>
      )}
      {title && (
        <div
          className={classNames(
            content.message.title.base,
            content.message.title.tone[tone]
          )}
        >
          {title}
        </div>
      )}
      {text && (
        <div
          className={classNames(
            content.message.text.base,
            content.message.text.tone[tone]
          )}
        >
          {text}
        </div>
      )}
    </div>
  )
}
