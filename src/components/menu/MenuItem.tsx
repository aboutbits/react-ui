import { MenuItem as ReachMenuItem } from '@reach/menu-button'
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
  onClick,
}) => {
  const { menu } = useTheme()

  return (
    <ReachMenuItem
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
