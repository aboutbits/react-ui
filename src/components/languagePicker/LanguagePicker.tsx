import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import { Menu, MenuButton, MenuLink, MenuList } from '@reach/menu-button'
import classNames from 'classnames'
import '@reach/menu-button/styles.css'
import { useIntl } from 'react-intl'
import { i18n, locales } from '../../translations/i18n'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import styles from './LanguagePicker.module.css'

const LanguagePicker: React.FC<{ menuLabel: string }> = ({ menuLabel }) => {
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
            className={languagePicker.menuButton.base}
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
                  !isExpanded && 'transform rotate-180',
                  styles.svg
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
