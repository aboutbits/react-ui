import { ReactNode } from 'react'
import classNames from 'classnames'
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
    <div className={classNames(section.sectionError.base)}>
      <div className={section.sectionError.icon.base}>{icon}</div>
      <div className={section.sectionError.title.base}>
        <FormattedMessage id="shared.error.title" />
      </div>
      <div className={section.sectionError.children.base}>{children}</div>
      <Button
        onClick={() => window.location.reload()}
        className={section.sectionError.button.base}
      >
        <FormattedMessage id="shared.button.reload" />
      </Button>
    </div>
  )
}
export { SectionError }
