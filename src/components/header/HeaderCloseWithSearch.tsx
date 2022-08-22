import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import React, { ReactNode, useState } from 'react'
import { HeaderArea, HeaderTitle } from '../header'
import { UseSearchQuery } from '../types'
import { HeaderCloseAction } from './actions/HeaderCloseAction'
import { HeaderRightActionIcon } from './actions/HeaderRightActionIcon'
import { HeaderMainProps } from './HeaderMain'
import { HeaderSearch } from './HeaderSearch'

type HeaderCloseWithSearchProps = UseSearchQuery &
  HeaderMainProps & {
    /**
     * Define the accessibility label for the search icon.
     **/
    labelIcon: string
    /**
     * Define which action should be executed on closing.
     **/
    onClose: () => void
  }

/**
 * @deprecated Will be removed with an updated version of the dialog component.
 */
const HeaderCloseWithSearch: React.FC<HeaderCloseWithSearchProps> = ({
  title,
  labelIcon,
  search,
  actions,
  onClose,
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
  title: ReactNode
  labelIcon: string
  startSearch: () => void
  onClose: () => void
}> = ({ title, labelIcon, startSearch, onClose }) => {
  return (
    <HeaderArea>
      <HeaderCloseAction onClick={onClose} />
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRightActionIcon
        icon={IconSearch}
        label={labelIcon}
        onClick={startSearch}
      />
    </HeaderArea>
  )
}

export { HeaderCloseWithSearch }
