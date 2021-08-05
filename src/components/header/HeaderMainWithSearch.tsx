import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { useState } from 'react'
import { UseSearchQuery } from '../types'
import { HeaderSearch } from './HeaderSearch'
import { Props as TitleProps } from './HeaderMain'
import {
  HeaderArea,
  HeaderRightArea,
  HeaderSmallAction,
  HeaderTitle,
} from './index'

type HeaderMainWithSearchProps = TitleProps &
  UseSearchQuery & {
    /**
     * Sets a label ([aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php)) for the search button.
     * */
    label: string
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

export { HeaderMainWithSearch }
