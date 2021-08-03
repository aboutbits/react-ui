import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { useState, useEffect, useRef } from 'react'
import { useIntl } from 'react-intl'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { HeaderLargeAction } from './actions/HeaderLargeAction'
import { Props as TitleProps } from './HeaderMain'
import {
  HeaderArea,
  HeaderRightArea,
  HeaderSmallAction,
  HeaderTitle,
  HeaderLeftArea,
} from './index'

type HeaderMainWithSearchProps = TitleProps & {
  /**
   * Sets a label ([aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php)) for the search button.
   * */
  label: string
  /**
   * Defines the passed value for the search input.
   * */
  search: string
  /**
   * Defines to functions:
   * 1. `search`: returns the typed input as callback
   * 2. `clear`: clears the search field
   * */
  searchActions: { search: (query: string) => void; clear: () => void }
}

const HeaderMainWithSearch: React.FC<HeaderMainWithSearchProps> = ({
  title,
  label,
  search,
  searchActions,
}) => {
  const [searchShow, setSearchShow] = useState<boolean>(search !== '')

  const startSearch = (): void => setSearchShow(true)
  const stopSearch = (): void => {
    setSearchShow(false)
    searchActions.clear()
  }

  if (searchShow) {
    return (
      <HeaderSearch
        text={search}
        setText={searchActions.search}
        stopSearch={stopSearch}
        clearSearch={searchActions.clear}
      />
    )
  } else {
    return (
      <HeaderArea>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderRightArea>
          <HeaderSmallAction
            icon={IconSearch}
            label={label}
            onClick={startSearch}
          />
        </HeaderRightArea>
      </HeaderArea>
    )
  }
}

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
      <div
        className={classNames(
          header.mainWithSearch.base,
          header.mainWithSearch.normal
        )}
      >
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
            header.mainWithSearch.input.base,
            header.mainWithSearch.input.normal
          )}
        />
        <button
          className="lg:hidden hover:text-header-search-delete-button focus:text-header-search-delete-button"
          aria-label={intl.formatMessage({
            id: 'shared.search.clear',
          })}
          onClick={clearSearch}
        >
          <IconClose className={header.mainWithSearch.icon.base} />
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

export { HeaderMainWithSearch, HeaderSearch }
