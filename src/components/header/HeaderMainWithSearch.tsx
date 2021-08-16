import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { useState } from 'react'
import { UseSearchQuery } from '../types'
import { HeaderSearch } from './HeaderSearch'
import { HeaderMainProps as HeaderMainProps } from './HeaderMain'
import {
  HeaderArea,
  HeaderRightArea,
  HeaderSmallAction,
  HeaderTitle,
} from './index'

type HeaderMainWithSearchProps = HeaderMainProps &
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
  actions,
}) => {
  const [searchShow, setSearchShow] = useState<boolean>(search !== '')

  const startSearch = (): void => setSearchShow(true)
  const stopSearch = (): void => {
    setSearchShow(false)
    actions.clear()
  }

  if (searchShow) {
    return (
      <HeaderSearch
        text={search}
        setText={actions.search}
        stopSearch={stopSearch}
        clearSearch={actions.clear}
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
