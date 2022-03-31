import { useEffect, useRef } from 'react'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useTheme, useInternationalization } from '../../framework'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderLeftArea } from './areas/HeaderLeftArea'
import { HeaderLargeAction } from './actions/HeaderLargeAction'
import { HeaderRightArea } from './areas/HeaderRightArea'
import { HeaderSmallAction } from './actions/HeaderSmallAction'

type Props = {
  /**
   * Defines the value for in input.
   **/
  text: string
  /**
   * Define a callback function for the value of the input.
   **/
  setText: (string: string) => void
  /**
   * Define a function which clears the search and closes the search.
   **/
  stopSearch: () => void
  /**
   * Define a functions which will clear the input of the search.
   **/
  clearSearch: () => void
}

const HeaderSearch: React.FC<Props> = ({
  text,
  setText,
  stopSearch,
  clearSearch,
}) => {
  const internationalization = useInternationalization()
  const { header } = useTheme()
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
            label={internationalization.translate('shared.search.back')}
            onClick={stopSearch}
          />
        </HeaderLeftArea>
      }
    >
      <div className={header.search.base}>
        <input
          ref={searchInput}
          value={text}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setText(ev.target.value)
          }
          placeholder={internationalization.translate(
            'shared.search.placeholder'
          )}
          className={header.search.input.base}
        />
        <button
          className={header.search.clearButton.base}
          aria-label={internationalization.translate('shared.search.clear')}
          onClick={clearSearch}
        >
          <IconClose className={header.search.icon.base} />
        </button>
      </div>
      <HeaderRightArea className="hidden lg:block">
        <HeaderSmallAction
          icon={IconClose}
          label={internationalization.translate('shared.search.back')}
          onClick={stopSearch}
        />
      </HeaderRightArea>
    </HeaderArea>
  )
}

export { HeaderSearch }
