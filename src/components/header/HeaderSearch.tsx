import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useEffect, useRef } from 'react'
import { useInternationalization, useTheme } from '../../framework'
import { HeaderLeftActionIcon } from './actions/HeaderLeftActionIcon'
import { HeaderRightActionIcon } from './actions/HeaderRightActionIcon'
import { HeaderArea } from './areas/HeaderArea'

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

/**
 * @deprecated Will be removed with an updated version of the dialog component.
 */
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
    <HeaderArea>
      <HeaderLeftActionIcon
        icon={IconArrowBack}
        label={internationalization.translate('shared.search.back')}
        onClick={stopSearch}
        className="lg:hidden"
      />
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
      <HeaderRightActionIcon
        icon={IconClose}
        label={internationalization.translate('shared.search.back')}
        onClick={stopSearch}
        className="hidden lg:block"
      />
    </HeaderArea>
  )
}

export { HeaderSearch }
