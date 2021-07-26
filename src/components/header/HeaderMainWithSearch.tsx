import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { useState, useEffect, useRef } from 'react'
import { useIntl } from 'react-intl'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import {
  HeaderArea,
  HeaderRightArea,
  HeaderSmallAction,
  HeaderTitle,
  HeaderLeftArea,
} from './index'
import { HeaderLargeAction } from './actions/HeaderLargeAction'

const HeaderMainWithSearch: React.FC<{
  title: string
  searchPlaceholder: string
  search: string
  searchActions: { search: (query: string) => void; clear: () => void }
}> = ({ title, searchPlaceholder, search, searchActions }) => {
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
            label={searchPlaceholder}
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
      <div className="flex flex-1 lg:p-0 py-1 px-3 bg-gray-300 lg:bg-transparent rounded-full">
        <input
          ref={searchInput}
          value={text}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setText(ev.target.value)
          }
          placeholder={intl.formatMessage({
            id: 'shared.search.placeholder',
          })}
          className="flex-1 w-full text-base lg:text-3xl placeholder-gray text-black bg-transparent border-none outline-none"
        />
        <button
          className="lg:hidden hover:text-gray-700 focus:text-gray-700"
          aria-label={intl.formatMessage({
            id: 'shared.search.clear',
          })}
          onClick={clearSearch}
        >
          <IconClose className="w-4 h-4 fill-current" />
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

export { HeaderMainWithSearch }
