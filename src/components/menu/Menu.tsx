import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import { Menu as MenuReach, MenuButton, MenuList } from '@reach/menu-button'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

type MenuProps = ClassNameProps & {
  /**
   * Defines the accessibility label for the menu.
   * */
  menuLabel: string
  /**
   * Defines the content to the left of the arrow button.
   * */
  menuButtonContent: ReactNode
  /**
   * Defines the id attribute for the menu button.
   * */
  menuButtonId?: string
}

const Menu: React.FC<MenuProps> = ({
  menuLabel,
  className,
  menuButtonContent,
  children,
  menuButtonId,
}) => {
  const { menu } = useTheme()

  return (
    <MenuReach>
      {({ isExpanded }) => (
        <>
          <MenuButton
            id={menuButtonId}
            aria-label={menuLabel}
            className={classNames(menu.menuButton.base, className)}
          >
            {menuButtonContent}
            <span aria-hidden>
              <IconArrowDropUp
                className={classNames(
                  menu.menuButton.icon.base,
                  !isExpanded && 'transform rotate-180'
                )}
              />
            </span>
          </MenuButton>
          <MenuList
            className={classNames(menu.menuList.base, menu.menuList.normal)}
          >
            {children}
          </MenuList>
        </>
      )}
    </MenuReach>
  )
}

export { Menu }
