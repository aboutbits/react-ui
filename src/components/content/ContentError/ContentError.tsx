import { ReactNode } from 'react'

import classnames from 'classnames'
import { Button } from '../../button'
import { useTheme, useInternationalization } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = {
  /**
   * Warning icon
   **/
  icon: ReactNode
} & ClassNameProps

export const ContentError: React.FC<Props> = ({
  icon,
  className,
  children,
}) => {
  const { content } = useTheme()
  const internationalization = useInternationalization()
  return (
    <div className={classnames(content.error.base, className)}>
      <div className={content.error.icon.base}>{icon}</div>
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
