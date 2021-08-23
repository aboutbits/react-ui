import { MenuItem as ReachMenuItem } from '@reach/menu-button'
import classNames from 'classnames'
import { useTheme } from '../../framework/theme/ThemeContext'
import { ClassNameProps } from '../types'

type MenuItemProps = ClassNameProps & {
  /**
   * Defines which action should be executed on clicking.
   * */
  onClick: () => void
  /**
   * Define accessibility label for the menu item.
   * */
  menuItemLabel: string
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  onClick,
  menuItemLabel,
}) => {
  const { menu } = useTheme()

  return (
    <ReachMenuItem
      aria-label={menuItemLabel}
      className={classNames(
        menu.menuItem.base,
        menu.menuItem.normal,
        className
      )}
      onSelect={onClick}
    >
      {children}
    </ReachMenuItem>
  )
}

export { MenuItem }
