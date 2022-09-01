import classNames from 'classnames'
import React, { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useTheme } from '../../../framework'
import { ClassNameProps, Tone } from '../../types'
import { SectionContent } from './SectionContent'

export type SectionContentNotificationProps = ClassNameProps & {
  icon?: ComponentType<IconProps>
  tone: Tone
  title?: string
  text?: string
}

export const SectionContentNotification: React.FC<
  SectionContentNotificationProps
> = ({ className, icon: Icon, title, text, tone, ...props }) => {
  const { section } = useTheme()

  return (
    <SectionContent
      className={classNames(section.contentError.container.base, className)}
      {...props}
    >
      <div className={section.contentNotification.base}>
        {Icon && (
          <div
            className={classNames(
              section.contentNotification.iconContainer.base,
              section.contentNotification.iconContainer.tone[tone]
            )}
          >
            <Icon
              className={classNames(
                section.contentNotification.icon.base,
                section.contentNotification.icon.tone[tone]
              )}
            />
          </div>
        )}
        {title && (
          <div
            className={classNames(
              section.contentNotification.title.base,
              section.contentNotification.title.tone[tone]
            )}
          >
            {title}
          </div>
        )}
        {text && (
          <div
            className={classNames(
              section.contentNotification.text.base,
              section.contentNotification.text.tone[tone]
            )}
          >
            {text}
          </div>
        )}
      </div>
    </SectionContent>
  )
}
