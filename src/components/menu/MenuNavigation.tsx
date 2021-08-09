import classNames from 'classnames'
import { useIntl } from 'react-intl'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

const MenuNavigation: React.FC<ClassNameProps> = ({ children, className }) => {
  const intl = useIntl()
  const { menu } = useTheme()
  return (
    <nav
      aria-label={intl.formatMessage({ id: 'app.nav.accessibility.main' })}
      className={classNames(className, menu.navigation.base)}
    >
      {children}
    </nav>
  )
}

export { MenuNavigation }
