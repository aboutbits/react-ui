import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import { Menu as MenuReach, MenuButton, MenuList } from '@reach/menu-button'
import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

type MenuProps = ClassNameProps & {
  /**
   * Defines the accessibility label for the menu.
   * */
  menuLabel: string
  /**
   * Defines the text to the left of the arrow button.
   * */
  text: string
  /**
   * Defines the id attribute for the menu button.
   * */
  menuButtonId?: string
}

const Menu: React.FC<MenuProps> = ({
  menuLabel,
  className,
  text,
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
            <span
              className={classNames(
                menu.menuButton.text.base,
                menu.menuButton.text.normal
              )}
            >
              {text}
            </span>
            <span aria-hidden>
              <IconArrowDropUp
                className={classNames(
                  menu.menuButton.icon.base,
                  menu.menuButton.icon.normal,
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
