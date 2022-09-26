import { ComponentType, ReactNode } from 'react'

import classNames from 'classnames'
import { Button } from '../../button'
import { useTheme, useInternationalization } from '../../../framework'
import { ClassNameProps } from '../../types'
import { Warning } from '../../../svg/Warning'
import { IconProps } from '../../../svg/types'

export type ContentErrorProps = {
  icon?: ComponentType<IconProps>
  children?: ReactNode
} & ClassNameProps

export function ContentError({
  icon: Icon = Warning,
  className,
  children,
}: ContentErrorProps) {
  const { content } = useTheme()
  const internationalization = useInternationalization()

  return (
    <div className={classNames(content.error.base, className)}>
      <Icon className={content.error.icon.base} />
      <div className={content.error.title.base}>
        {internationalization.translate('shared.error.title')}
      </div>
      <div className={content.error.children.base}>{children}</div>
      <Button
        onClick={() => window.location.reload()}
        className={content.error.button.base}
      >
        {internationalization.translate('shared.button.reload')}
      </Button>
    </div>
  )
}
