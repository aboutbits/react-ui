import classNames from 'classnames'
import { useTheme } from '../../framework/theme/ThemeContext'
import { ClassNameProps } from '../types'

type Props = ClassNameProps & {
  /**
   * Define the accessibility label for the navigation.
   * */
  navLabel: string
}

export const Navigation: React.FC<Props> = ({
  children,
  className,
  navLabel,
}) => {
  const { navigation } = useTheme()
  return (
    <nav
      aria-label={navLabel}
      className={classNames(className, navigation.navigation.base)}
    >
      {children}
    </nav>
  )
}
