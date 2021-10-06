import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import React, { ReactNode, useState } from 'react'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import {
  HeaderArea,
  HeaderRightArea,
  HeaderSmallAction,
  HeaderTitle,
  HeaderLeftArea,
} from '../header'
import { UseSearchQuery } from '../types'
import { useInternationalization } from '../../framework'
import { HeaderLargeAction } from './actions/HeaderLargeAction'
import { HeaderSearch } from './HeaderSearch'
import { HeaderMainProps as HeaderMainProps } from './HeaderMain'

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
  const internationalization = useInternationalization()

  return (
    <HeaderArea
      navigation={
        <HeaderLeftArea>
          <HeaderLargeAction
            icon={IconClose}
            label={internationalization.translate('shared.search.close')}
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
