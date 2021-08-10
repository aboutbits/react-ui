import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

type MenuNavigationProps = ClassNameProps & {
  /**
   * Define the accessibility label for the navigation.
   * */
  navLabel: string
}

const Navigation: React.FC<MenuNavigationProps> = ({
  children,
  className,
  navLabel,
}) => {
  const { menu } = useTheme()
  return (
    <nav
      aria-label={navLabel}
      className={classNames(className, menu.navigation.base)}
    >
      {children}
    </nav>
  )
}

export { Navigation }
