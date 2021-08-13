import { ReactNode } from 'react'

import { Button } from '../../button/Button'
import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { useInternationalization } from '../../../designSystem/internationalization/InternationalizationContext'

type Props = {
  /**
   * Warning icon
   */
  icon: ReactNode
}

export const SectionError: React.FC<Props> = ({ icon, children }) => {
  const { section } = useTheme()
  const internationalization = useInternationalization()
  return (
    <div className={section.error.base}>
      <div className={section.error.icon.base}>{icon}</div>
      <div className={section.error.title.base}>
        {internationalization.translate('shared.error.title')}
      </div>
      <div className={section.error.children.base}>{children}</div>
      <Button
        onClick={() => window.location.reload()}
        className={section.error.button.base}
      >
        {internationalization.translate('shared.button.reload')}
      </Button>
    </div>
  )
}
