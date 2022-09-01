import classNames from 'classnames'
import React, { ComponentType, ReactElement } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useTheme } from '../../../framework'
import { Tone } from '../../types'
import { SectionContent, SectionContentProps } from './SectionContent'

export type SectionContentNotificationProps = SectionContentProps & {
  icon?: ComponentType<IconProps>
  tone: Tone
  title?: ReactElement
  text: ReactElement
}

export const SectionContentNotification: React.FC<
  SectionContentNotificationProps
> = ({ className, icon: Icon, title, text, tone, ...props }) => {
  const { section } = useTheme()

  console.log(tone)

  return (
    <SectionContent
      className={classNames(section.contentError.container.base, className)}
      {...props}
    >
      <div className="flex max-w-[360px] flex-col items-center justify-center pt-3">
        {Icon && (
          <div className="rounded-full bg-neutral-100 p-4 outline-1 outline-offset-2">
            <Icon className="h-6 w-6 fill-current text-neutral-500" />
          </div>
        )}
        {title && (
          <div className="pt-4 text-xl font-bold text-neutral-500">{title}</div>
        )}
        <div className="text-center text-neutral-500">{text}</div>
      </div>
    </SectionContent>
  )
}
