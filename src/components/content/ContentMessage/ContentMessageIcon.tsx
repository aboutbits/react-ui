import classNames from 'classnames'
import { ComponentType } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps, IconProps, Tone } from '../../types'

export enum ContentMessageIconStyle {
  rounded = 'rounded',
  plain = 'plain',
}

export type ContentMessageIconProps = ClassNameProps & {
  icon: ComponentType<IconProps>
  iconStyle?: ContentMessageIconStyle
  tone?: Tone
}

export function ContentMessageIcon({
  icon: Icon,
  iconStyle = ContentMessageIconStyle.rounded,
  tone = Tone.primary,
  className,
}: ContentMessageIconProps) {
  const { content } = useTheme()

  return (
    <div
      className={classNames(
        content.message.iconContainer.base,
        content.message.iconContainer.style[iconStyle].base,
        content.message.iconContainer.style[iconStyle].tone[tone],
        className
      )}
    >
      <Icon
        className={classNames(
          content.message.icon.base,
          content.message.icon.style[iconStyle],
          content.message.icon.tone[tone]
        )}
      />
    </div>
  )
}
