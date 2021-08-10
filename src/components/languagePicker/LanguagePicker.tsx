import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import { Menu, MenuButton, MenuLink, MenuList } from '@reach/menu-button'
import classNames from 'classnames'
import '@reach/menu-button/styles.css'
import { useIntl } from 'react-intl'
import { i18n, locales } from '../../translations/i18n'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

type LanguagePickerProps = ClassNameProps & {
  /**
   * Defines the accessibility label for the menu.
   * */
  menuLabel: string
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({
  menuLabel,
  className,
}) => {
  const intl = useIntl()
  const { languagePicker } = useTheme()

  const currentLocale = intl.locale

  return (
    <Menu>
      {({ isExpanded }) => (
        <>
          <MenuButton
            id="navigation.language.desktop"
            aria-label={menuLabel}
            className={classNames(languagePicker.menuButton.base, className)}
          >
            <span
              className={classNames(
                languagePicker.menuButton.text.base,
                languagePicker.menuButton.text.normal
              )}
            >
              {currentLocale}
            </span>
            <span aria-hidden>
              <IconArrowDropUp
                className={classNames(
                  languagePicker.menuButton.icon.base,
                  languagePicker.menuButton.icon.normal,
                  !isExpanded && 'transform rotate-180'
                )}
              />
            </span>
          </MenuButton>

          <MenuList
            className={classNames(
              languagePicker.menuList.base,
              languagePicker.menuList.normal
            )}
          >
            {i18n.supportedLanguages.map((supportedLanguage, index) => (
              <MenuLink
                key={index}
                onClick={() => {
                  i18n.setLanguage(supportedLanguage)
                  window.location.reload()
                }}
                className={languagePicker.menuList.menuLink.base}
              >
                {locales[supportedLanguage]}
              </MenuLink>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export { LanguagePicker }
