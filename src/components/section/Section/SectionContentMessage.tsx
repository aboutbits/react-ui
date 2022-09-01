import classNames from 'classnames'
import React, { ComponentType, ReactNode } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useTheme } from '../../../framework'
import { ClassNameProps, Tone } from '../../types'
import { SectionContent } from './SectionContent'

export type SectionContentMessageProps = ClassNameProps & {
  icon?: ComponentType<IconProps>
  tone?: Tone
  title?: ReactNode | string
  text?: ReactNode | string
}

export const SectionContentMessage: React.FC<SectionContentMessageProps> = ({
  className,
  icon: Icon,
  title,
  text,
  tone = Tone.primary,
  ...props
}) => {
  const { section } = useTheme()

  return (
    <SectionContent
      className={classNames(section.contentMessage.contentContainer, className)}
      {...props}
    >
      <div className={section.contentMessage.base}>
        {Icon && (
          <div
            className={classNames(
              section.contentMessage.iconContainer.base,
              section.contentMessage.iconContainer.tone[tone]
            )}
          >
            <Icon
              className={classNames(
                section.contentMessage.icon.base,
                section.contentMessage.icon.tone[tone]
              )}
            />
          </div>
        )}
        {title && (
          <div
            className={classNames(
              section.contentMessage.title.base,
              section.contentMessage.title.tone[tone]
            )}
          >
            {title}
          </div>
        )}
        {text && (
          <div
            className={classNames(
              section.contentMessage.text.base,
              section.contentMessage.text.tone[tone]
            )}
          >
            {text}
          </div>
        )}
      </div>
    </SectionContent>
  )
}
