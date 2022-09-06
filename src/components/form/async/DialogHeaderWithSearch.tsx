import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useInternationalization, useTheme } from '../../../framework'
import { ButtonIcon, Variant } from '../../button'
import {
  DialogHeaderArea,
  DialogHeaderLeftArea,
  DialogHeaderRightArea,
  DialogHeaderTitle,
} from '../../dialog'
import { ClassNameProps, Tone, UseSearchQuery } from '../../types'

type DialogHeaderWithSearch = {
  /**
   * Defines which action should be executed on dismissing.
   **/
  onDismiss: React.MouseEventHandler
  /**
   * Defines the title of the header.
   **/
  title: string
  /**
   * Define the accessibility label for the search icon.
   **/
  iconLabel: string
} & UseSearchQuery &
  ClassNameProps

export function DialogHeaderWithSearch({
  title,
  iconLabel,
  search,
  onDismiss,
  actions,
}: DialogHeaderWithSearch): ReactElement {
  const [searchShow, setSearchShow] = useState<boolean>(search !== '')

  const startSearch = () => setSearchShow(true)
  const stopSearch = () => {
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
  }

  return (
    <HeaderNoSearch
      title={title}
      labelIcon={iconLabel}
      startSearch={startSearch}
      onClose={onDismiss}
    />
  )
}

export function HeaderSearch({
  text,
  setText,
  stopSearch,
  clearSearch,
}: {
  text: string
  setText: (string: string) => void
  stopSearch: () => void
  clearSearch: () => void
}): ReactElement {
  const internationalization = useInternationalization()
  const { form } = useTheme()
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
      <div className={form.selectItem.headerSearch.base}>
        <input
          ref={searchInput}
          value={text}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setText(ev.target.value)
          }
          placeholder={internationalization.translate(
            'shared.search.placeholder'
          )}
          className={form.selectItem.headerSearch.input.base}
        />
        <button
          className={form.selectItem.headerSearch.clearButton.base}
          aria-label={internationalization.translate('shared.search.clear')}
          onClick={clearSearch}
        >
          <IconClose
            className={form.selectItem.headerSearch.clearButton.icon}
          />
        </button>
      </div>
    </DialogHeaderArea>
  )
}

export function HeaderNoSearch({
  title,
  labelIcon,
  startSearch,
  onClose,
}: {
  title: ReactNode
  labelIcon: string
  startSearch: () => void
  onClose: React.MouseEventHandler
}): ReactElement {
  return (
    <DialogHeaderArea>
      <DialogHeaderLeftArea>
        <ButtonIcon
          icon={IconClose}
          variant={Variant.transparent}
          tone={Tone.neutral}
          onClick={onClose}
        />
      </DialogHeaderLeftArea>
      <DialogHeaderTitle>{title}</DialogHeaderTitle>
      <DialogHeaderRightArea>
        <ButtonIcon
          icon={IconSearch}
          label={labelIcon}
          variant={Variant.transparent}
          tone={Tone.neutral}
          onClick={startSearch}
        />
      </DialogHeaderRightArea>
    </DialogHeaderArea>
  )
}
