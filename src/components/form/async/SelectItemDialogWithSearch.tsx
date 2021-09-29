import { AsyncView } from '@aboutbits/react-toolbox'
import React, { ReactElement, ReactNode, useState } from 'react'
import { SelectDialog } from '../../dialog/select/SelectDialog'
import {
  SectionContentList,
  SectionContentListEmpty,
  SectionListItemButton,
} from '../../section'
import { Alert, Tone } from '../../alert'
import { useInternationalization } from '../../../framework'
import {
  PaginationInMemoryProps,
  SectionFooterWithPaginationInMemory,
} from '../../pagination'
import { LoadingListItem } from '../../loading/LoadingListItem'
import { ReferenceObject } from './SelectItem'

type SearchQueryParameters = {
  query?: string
} & PaginationQueryParameters

type PaginationQueryParameters = Pick<PaginationInMemoryProps, 'page' | 'size'>

type PaginatedResponse<T> = {
  items: T[]
  total: number
  currentPage: number
  perPage: number
}

export type Props<ItemType extends ReferenceObject, Error> = {
  onDismiss: (event?: React.SyntheticEvent<Element, Event> | undefined) => void
  isOpen: boolean
  onConfirm: (item: ItemType) => void
  useGetData: (params: SearchQueryParameters & PaginationQueryParameters) => {
    data?: PaginatedResponse<ItemType>
    error?: Error
  }
  renderListItem: (item: ItemType) => ReactNode
  renderErrorMessage: (error: Error) => ReactNode
  dialogTitle: string
  dialogLabel: string
  noSearchResults: string
  paginationConfig: { indexType: number }
}

export function SelectItemDialogWithSearch<
  ItemType extends ReferenceObject,
  Error
>({
  onDismiss,
  onConfirm,
  isOpen,
  useGetData,
  renderListItem,
  renderErrorMessage,
  dialogTitle,
  dialogLabel,
  noSearchResults,
  paginationConfig,
}: Props<ItemType, Error>): ReactElement {
  const internationalization = useInternationalization()
  const [search, setSearch] = useState('')
  const clearSearch = () => setSearch('')
  const [page, setPage] = useState(paginationConfig.indexType)
  const { data, error } = useGetData({ query: search, page, size: 15 })

  const searching = search !== ''
  const empty = searching
    ? internationalization.translate('shared.select.search.empty')
    : noSearchResults

  return (
    <SelectDialog
      isOpen={isOpen}
      title={dialogTitle}
      iconLabel={internationalization.translate('shared.search.label')}
      search={search}
      actions={{ search: setSearch, clear: clearSearch }}
      onDismiss={onDismiss}
      dialogLabel={dialogLabel}
    >
      <AsyncView
        data={data}
        error={error}
        renderLoading={
          <SectionContentList>
            <LoadingListItem />
            <LoadingListItem />
            <LoadingListItem />
          </SectionContentList>
        }
        renderSuccess={(data) => (
          <>
            <SectionContentList>
              {data.items.map((item, index) => (
                <SectionListItemButton
                  key={index}
                  onClick={() => {
                    onConfirm(item)
                  }}
                >
                  <div className="flex flex-1 justify-between">
                    {renderListItem(item)}
                  </div>
                </SectionListItemButton>
              ))}
              {data.items.length === 0 && (
                <SectionContentListEmpty>{empty}</SectionContentListEmpty>
              )}
            </SectionContentList>
            <SectionFooterWithPaginationInMemory
              page={data.currentPage}
              size={data.perPage}
              total={data.total}
              onChangePage={setPage}
              config={paginationConfig}
            />
          </>
        )}
        renderError={(error) => (
          <SectionContentListEmpty>
            <Alert tone={Tone.critical}>{renderErrorMessage(error)}</Alert>
          </SectionContentListEmpty>
        )}
      />
    </SelectDialog>
  )
}
