import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { useQueryAndPagination } from '@aboutbits/react-pagination/dist/inMemoryPagination'
import { Actions } from '@aboutbits/react-pagination/dist/types'
import { AsyncView } from '@aboutbits/react-toolbox'
import { ReactElement, ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { useInternationalization, useTheme } from '../../../framework'
import {
  Dialog,
  DialogContentArea,
  DialogContentEmpty,
  DialogContentError,
  DialogHeaderArea,
  DialogHeaderCloseAction,
  DialogHeaderTitle,
  DialogPosition,
  DialogProps,
} from '../../dialog'
import { DialogFooterWithPaginationInMemory } from '../../dialog/DialogFooter/DialogFooterWithPaginationInMemory'
import { DialogContentList } from '../../dialog/Dialog/DialogContentList'
import { DialogListItemButton } from '../../dialog/DialogItem/DialogListItemButton'
import { PaginationInMemoryProps } from '../../pagination'
import { AutoSubmit } from '../AutoSubmit'
import { Input } from '../Input'
import { Variant } from '../types'
import { DialogContentListLoading } from '../../dialog/Dialog/DialogContentListLoading'
import { DialogHeaderRow } from '../../dialog/DialogHeader/DialogHeaderRow'
import { Form } from '../Form'

type FilterParameters = {
  search: string
}

export type SearchQueryParameters = Partial<FilterParameters> &
  PaginationQueryParameters

export type PaginationQueryParameters = Pick<
  PaginationInMemoryProps,
  'page' | 'size'
>

export type PaginatedResponse<T> = {
  items: T[]
  total: number
  currentPage: number
  perPage: number
}

export type SelectItemDialogWithSearchProps<ItemType, Error> = DialogProps & {
  onConfirm: (item: ItemType) => void
  useGetData: (params: SearchQueryParameters & PaginationQueryParameters) => {
    data?: PaginatedResponse<ItemType>
    error?: Error
  }
  renderListItem: (item: ItemType) => ReactNode
  renderErrorMessage: (error: Error) => ReactNode
  noSearchResults: string
  paginationConfig: { indexType: number }
  numberOfLoadingItems?: number
  title: ReactNode
}

const defaultValues: FilterParameters = {
  search: '',
}

export function SelectItemDialogWithSearch<ItemType, Error>({
  onConfirm,
  useGetData,
  renderListItem,
  renderErrorMessage,
  noSearchResults,
  paginationConfig,
  numberOfLoadingItems = 5,
  title,
  ...props
}: SelectItemDialogWithSearchProps<ItemType, Error>): ReactElement {
  const { queryParameters, page, size, actions } = useQueryAndPagination({
    ...paginationConfig,
    defaultQueryParameters: defaultValues,
  })

  const { data, error } = useGetData({
    search: queryParameters.search,
    page,
    size,
  })

  const searching = queryParameters.search !== ''

  return (
    <Dialog mobilePosition={DialogPosition.fullscreen} {...props}>
      <>
        <DialogHeaderArea>
          <DialogHeaderRow>
            <DialogHeaderCloseAction onClick={props.onDismiss} />
            <DialogHeaderTitle>{title}</DialogHeaderTitle>
          </DialogHeaderRow>
          <DialogHeaderRow className="my-2">
            <SelectItemDialogSearch actions={actions} />
          </DialogHeaderRow>
        </DialogHeaderArea>
        <AsyncView
          data={data}
          error={error}
          renderSuccess={(data) => (
            <SelectItemDialogSuccess
              data={data}
              searching={searching}
              actions={actions}
              onConfirm={onConfirm}
              renderListItem={renderListItem}
              paginationConfig={paginationConfig}
              noSearchResults={noSearchResults}
            />
          )}
          renderLoading={
            <DialogContentListLoading
              numberOfItems={numberOfLoadingItems}
              enableScrollLayout={false}
            />
          }
          renderError={(error) => (
            <DialogContentError text={renderErrorMessage(error)} />
          )}
        />
      </>
    </Dialog>
  )
}

export function SelectItemDialogSearch({
  actions,
}: {
  actions: Actions
}): ReactElement {
  const { messages } = useInternationalization()
  const form = useForm({ defaultValues })

  return (
    <Form form={form} onSubmit={actions.updateQuery} className="flex-1">
      <AutoSubmit />
      <Input
        name="search"
        variant={Variant.soft}
        iconStart={IconSearch}
        placeholder={messages['search.placeholder']}
      />
    </Form>
  )
}

export function SelectItemDialogSuccess<ItemType, Error>({
  data,
  actions,
  searching,
  onConfirm,
  renderListItem,
  paginationConfig,
  noSearchResults,
}: {
  data: PaginatedResponse<ItemType>
  actions: Actions
  searching: boolean
} & Pick<
  SelectItemDialogWithSearchProps<ItemType, Error>,
  'onConfirm' | 'renderListItem' | 'paginationConfig' | 'noSearchResults'
>): ReactElement {
  const { messages } = useInternationalization()
  const { form } = useTheme()

  const empty = searching ? messages['select.search.empty'] : noSearchResults

  return data.items.length === 0 ? (
    <DialogContentEmpty text={empty} />
  ) : (
    <>
      <DialogContentArea
        enableScrollLayout={false}
        className={form.selectItem.dialogContentArea.base}
      >
        <DialogContentList>
          {data.items.map((item, index) => (
            <DialogListItemButton
              key={index}
              onClick={() => {
                onConfirm(item)
              }}
            >
              {renderListItem(item)}
            </DialogListItemButton>
          ))}
        </DialogContentList>
      </DialogContentArea>
      <DialogFooterWithPaginationInMemory
        page={data.currentPage}
        size={data.perPage}
        total={data.total}
        onChangePage={actions.setPage}
        config={paginationConfig}
      />
    </>
  )
}
