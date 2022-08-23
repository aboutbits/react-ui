import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { ReactElement, useEffect, useRef } from 'react'
import { useInternationalization, useTheme } from '../../../framework'
import { ButtonIcon, Variant } from '../../button'
import { Tone } from '../../types'
import { DialogHeaderArea } from '../areas/DialogHeaderArea'
import { DialogHeaderLeftArea } from '../areas/DialogHeaderLeftArea'

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

export function HeaderSearch({
  text,
  setText,
  stopSearch,
  clearSearch,
}: Props): ReactElement {
  const internationalization = useInternationalization()
  const { dialog } = useTheme()
  const searchInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchInput.current !== null) {
      searchInput.current.focus()
    }
  }, [])

  return (
    <DialogHeaderArea>
      <DialogHeaderLeftArea>
        <ButtonIcon
          icon={IconArrowBack}
          label={internationalization.translate('shared.search.back')}
          onClick={stopSearch}
          variant={Variant.transparent}
          tone={Tone.neutral}
        />
      </DialogHeaderLeftArea>
      <div className={dialog.headerSearch.base}>
        <input
          ref={searchInput}
          value={text}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setText(ev.target.value)
          }
          placeholder={internationalization.translate(
            'shared.search.placeholder'
          )}
          className={dialog.headerSearch.input.base}
        />
        <button
          className={dialog.headerSearch.clearButton.base}
          aria-label={internationalization.translate('shared.search.clear')}
          onClick={clearSearch}
        >
          <IconClose className={dialog.headerSearch.clearButton.icon} />
        </button>
      </div>
    </DialogHeaderArea>
  )
}
