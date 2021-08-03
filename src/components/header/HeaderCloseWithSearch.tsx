import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import {
  HeaderArea,
  HeaderRightArea,
  HeaderSmallAction,
  HeaderTitle,
  HeaderLeftArea,
} from '../header'
import { HeaderLargeAction } from './actions/HeaderLargeAction'
import { HeaderSearch } from './HeaderMainWithSearch'
import { Props as TitleProps } from './HeaderMain'

type HeaderCloseWithSearchProps = TitleProps & {
  /**
   *  Define a header title.
   * */
  title: string
  /**
   * Define the accessibility label for the search icon.
   * */
  labelIcon: string
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
  /**
   * Define which action should be executed on closing.
   * */
  onClose: () => void
}

const HeaderCloseWithSearch: React.FC<HeaderCloseWithSearchProps> = ({
  title,
  labelIcon,
  search,
  searchActions,
  onClose,
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
      <HeaderNotSearching
        title={title}
        labelIcon={labelIcon}
        startSearch={startSearch}
        onClose={onClose}
      />
    )
  }
}

const HeaderNotSearching: React.FC<{
  title: string
  labelIcon: string
  startSearch: () => void
  onClose: () => void
}> = ({ title, labelIcon, startSearch, onClose }) => {
  const intl = useIntl()

  return (
    <HeaderArea
      navigation={
        <HeaderLeftArea>
          <HeaderLargeAction
            icon={IconClose}
            label={intl.formatMessage({ id: 'shared.search.close' })}
            onClick={onClose}
          />
        </HeaderLeftArea>
      }
    >
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRightArea>
        <HeaderSmallAction
          icon={IconSearch}
          label={labelIcon}
          onClick={startSearch}
        />
      </HeaderRightArea>
    </HeaderArea>
  )
}

export { HeaderCloseWithSearch }
