import { MenuLink } from '@reach/menu-button'
import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

type MenuItemProps = ClassNameProps & {
  /**
   * Defines which action should be executed on clicking.
   * */
  onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  ...props
}) => {
  const { menu } = useTheme()

  return (
    <MenuLink className={classNames(menu.menuLink.base, className)} {...props}>
      {children}
    </MenuLink>
  )
}

export { MenuItem }
