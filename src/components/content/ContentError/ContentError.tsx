import { ReactNode } from 'react'

import { Button } from '../../button'
import { useTheme, useInternationalization } from '../../../framework'

type Props = {
  /**
   * Warning icon
   */
  icon: ReactNode
}

export const ContentError: React.FC<Props> = ({ icon, children }) => {
  const { content } = useTheme()
  const internationalization = useInternationalization()
  return (
    <div className={content.error.base}>
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
