import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import { Menu, MenuButton, MenuLink, MenuList } from '@reach/menu-button'
import classNames from 'classnames'

import { useIntl } from 'react-intl'
import { i18n, locales } from './i18n'
import styles from './LanguagePicker.module.css'

const LanguagePicker: React.FC = () => {
  const intl = useIntl()

  const currentLocale = intl.locale

  return (
    <Menu>
      {({ isExpanded }) => (
        <>
          <MenuButton
            id="navigation.language.desktop"
            aria-label={intl.formatMessage({
              id: 'shared.footer.languagePicker.selectLanguage',
            })}
            className="flex items-center text-xs hover:opacity-60 active:opacity-60"
          >
            <span className="text-primary-700 lg:text-white underline capitalize">
              {currentLocale}
            </span>
            <span aria-hidden>
              <IconArrowDropUp
                className={classNames(
                  'w-6 h-6',
                  !isExpanded && 'transform rotate-180',
                  styles.svg
                )}
              />
            </span>
          </MenuButton>

          <MenuList className="py-3 mb-1 w-32 text-sm bg-white shadow-languageSelector focus:outline-none">
            {i18n.supportedLanguages.map((supportedLanguage, index) => (
              <MenuLink
                key={index}
                onClick={(): void => {
                  i18n.setLanguage(supportedLanguage)
                  window.location.reload()
                }}
                className={classNames(
                  'block py-1 px-4 hover:bg-primary-100 cursor-pointer'
                )}
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
