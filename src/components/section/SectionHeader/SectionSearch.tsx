import { ReactElement, useEffect, useRef, useState } from 'react'
import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import classNames from 'classnames'
import { UseSearchQuery } from '../../types'
import { useInternationalization, useTheme } from '../../../framework'
import { SectionAction } from './SectionAction'
import { SectionTitle } from './SectionTitle'

type SectionSearchProps = {
  title: string
} & UseSearchQuery

export function SectionSearch({
  title,
  search,
  actions,
}: SectionSearchProps): ReactElement {
  const internationalization = useInternationalization()
  const { section } = useTheme()
  const [searchShow, setSearchShow] = useState<boolean>(search !== '')
  const searchInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchInput.current !== null) {
      searchInput.current.focus()
    }
  }, [searchShow])

  const startSearch = (): void => {
    setSearchShow(true)
  }
  const stopSearch = (): void => {
    setSearchShow(false)
    actions.clear()
  }

  if (searchShow) {
    return (
      <>
        <input
          ref={searchInput}
          value={search}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            actions.search(ev.target.value)
          }
          placeholder={internationalization.translate(
            'shared.search.placeholder'
          )}
          className={classNames(
            section.search.input.base,
            section.search.input.normal
          )}
        />
        <SectionAction
          Icon={IconClose}
          label={internationalization.translate('shared.search.close')}
          onClick={stopSearch}
        />
      </>
    )
  } else {
    return (
      <>
        <SectionTitle>{title}</SectionTitle>
        <SectionAction
          Icon={IconSearch}
          label={internationalization.translate('shared.search.open')}
          onClick={startSearch}
        />
      </>
    )
  }
}
