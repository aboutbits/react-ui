import { useSearchAndPagination } from '@aboutbits/react-pagination/dist/inMemoryPagination'
import { AsyncView } from '@aboutbits/react-toolbox'
import React, { ReactElement, ReactNode } from 'react'
import { SelectDialog } from '../dialog/select/SelectDialog'
import {
  SectionContentList,
  SectionContentListEmpty,
  SectionListItem,
  SectionListItemButton,
} from '../section'
import { LoadingBar } from '../loading'
import { Alert, Tone } from '../alert'
import { useInternationalization } from '../../framework'
import { ReferenceObject } from './SelectItem'

type SearchQueryParameters = {
  query?: string
} & PaginationQueryParameters

type PaginationQueryParameters = {
  page?: number
  size?: number
}

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
}

export function SelectItemSearchableDialog<
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
}: Props<ItemType, Error>): ReactElement {
  const internationalization = useInternationalization()
  const { page, size, search, actions } = useSearchAndPagination()
  const { data, error } = useGetData({ query: search, page, size })

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
      actions={actions}
      onDismiss={onDismiss}
      dialogLabel={dialogLabel}
    >
      <AsyncView
        data={data}
        error={error}
        renderLoading={
          <SectionContentList>
            <SectionListItem>
              <LoadingBar className="p-4 w-full" />
            </SectionListItem>
            <SectionListItem>
              <LoadingBar className="p-4 w-full" />
            </SectionListItem>
            <SectionListItem>
              <LoadingBar className="p-4 w-full" />
            </SectionListItem>
          </SectionContentList>
        }
        renderSuccess={(data) => (
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
