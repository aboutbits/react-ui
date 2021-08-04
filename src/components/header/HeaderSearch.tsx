import { useIntl } from 'react-intl'
import { useEffect, useRef } from 'react'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import classNames from 'classnames'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderLeftArea } from './areas/HeaderLeftArea'
import { HeaderLargeAction } from './actions/HeaderLargeAction'
import { HeaderRightArea } from './areas/HeaderRightArea'
import { HeaderSmallAction } from './actions/HeaderSmallAction'

const HeaderSearch: React.FC<{
  text: string
  setText: (string: string) => void
  stopSearch: () => void
  clearSearch: () => void
}> = ({ text, setText, stopSearch, clearSearch }) => {
  const intl = useIntl()
  const searchInput = useRef<HTMLInputElement>(null)
  const { header } = useTheme()

  useEffect(() => {
    if (searchInput.current !== null) {
      searchInput.current.focus()
    }
  }, [])

  return (
    <HeaderArea
      navigation={
        <HeaderLeftArea className="lg:hidden">
          <HeaderLargeAction
            icon={IconArrowBack}
            label={intl.formatMessage({ id: 'shared.search.back' })}
            onClick={stopSearch}
          />
        </HeaderLeftArea>
      }
    >
      <div className={classNames(header.search.base, header.search.normal)}>
        <input
          ref={searchInput}
          value={text}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setText(ev.target.value)
          }
          placeholder={intl.formatMessage({
            id: 'shared.search.placeholder',
          })}
          className={classNames(
            header.search.input.base,
            header.search.input.normal
          )}
        />
        <button
          className={classNames(
            header.search.button.base,
            header.search.button.normal
          )}
          aria-label={intl.formatMessage({
            id: 'shared.search.clear',
          })}
          onClick={clearSearch}
        >
          <IconClose className={header.search.icon.base} />
        </button>
      </div>
      <HeaderRightArea className="hidden lg:block">
        <HeaderSmallAction
          icon={IconClose}
          label={intl.formatMessage({
            id: 'shared.search.back',
          })}
          onClick={stopSearch}
        />
      </HeaderRightArea>
    </HeaderArea>
  )
}

export { HeaderSearch }
