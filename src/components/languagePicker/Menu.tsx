import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import { Menu as MenuReach, MenuButton, MenuList } from '@reach/menu-button'
import classNames from 'classnames'
import '@reach/menu-button/styles.css'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

type LanguagePickerProps = ClassNameProps & {
  /**
   * Defines the accessibility label for the menu.
   * */
  menuLabel: string
  /**
   * Defines the text to the left of the arrow button.
   * */
  text: string
}

const Menu: React.FC<LanguagePickerProps> = ({
  menuLabel,
  className,
  text,
  children,
}) => {
  const { menu } = useTheme()

  return (
    <MenuReach>
      {({ isExpanded }) => (
        <>
          <MenuButton
            id="navigation.language.desktop"
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
