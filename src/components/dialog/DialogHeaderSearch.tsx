import React, { ReactElement, useState } from 'react'
import { ClassNameProps, UseSearchQuery } from '../types'
import { HeaderNoSearch } from './headerSearch/HeaderNoSearch'
import { HeaderSearch } from './headerSearch/HeaderSearch'

type Props = {
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

export function DialogHeaderSearch({
  title,
  iconLabel,
  search,
  onDismiss,
  actions,
}: Props): ReactElement {
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
