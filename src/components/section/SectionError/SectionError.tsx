import { ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'

import { Button } from '../../button/Button'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

type Props = {
  /**
   * Warning icon
   */
  icon: ReactNode
}

const SectionError: React.FC<Props> = ({ icon, children }) => {
  const { section } = useTheme()
  return (
    <div className={section.error.base}>
      <div className={section.error.icon.base}>{icon}</div>
      <div className={section.error.title.base}>
        <FormattedMessage id="shared.error.title" />
      </div>
      <div className={section.error.children.base}>{children}</div>
      <Button
        onClick={() => window.location.reload()}
        className={section.error.button.base}
      >
        <FormattedMessage id="shared.button.reload" />
      </Button>
    </div>
  )
}
export { SectionError }
