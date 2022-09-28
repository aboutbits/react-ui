import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import { Menu as MenuReach, MenuButton, MenuList } from '@reach/menu-button'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type MenuProps = ClassNameProps & {
  /**
   * Defines the accessibility label for the menu.
   **/
  menuLabel: string
  /**
   * Defines the content to the left of the arrow button.
   **/
  menuButtonContent: ReactNode
  /**
   * Defines the id attribute for the menu button.
   **/
  menuButtonId?: string
  children?: ReactNode
}

export function Menu({
  menuLabel,
  className,
  menuButtonContent,
  children,
  menuButtonId,
}: MenuProps) {
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
                  !isExpanded && 'rotate-180 transform'
                )}
              />
            </span>
          </MenuButton>
          <MenuList className={menu.menuList.base}>{children}</MenuList>
        </>
      )}
    </MenuReach>
  )
}
