import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { useQueryAndPagination } from '@aboutbits/react-pagination/dist/inMemoryPagination'
import { Actions } from '@aboutbits/react-pagination/dist/types'
import { AsyncView } from '@aboutbits/react-toolbox'
import { ReactElement, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useInternationalization, useTheme } from '../../../framework'
import {
  Dialog,
  DialogContentArea,
  DialogContentEmpty,
  DialogContentError,
  DialogContentList,
  DialogContentListLoading,
  DialogFooterWithPaginationInMemory,
  DialogHeaderArea,
  DialogHeaderCloseAction,
  DialogHeaderRow,
  DialogHeaderTitle,
  DialogListItemButton,
  DialogPosition,
  DialogProps,
} from '../../dialog'
import { FormVariant } from '../../formNew/types'
import { PaginationInMemoryProps } from '../../pagination'
import { InputFormField } from '../../react-hook-form/InputFormField'
import { AutoSubmit } from '../AutoSubmit'

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
    <FormProvider {...form}>
      <form
        onSubmit={(event) => {
          // Stop propagation to prevent submitting a form outside of the dialog (bubbling up the React tree)
          event.stopPropagation()
          return form.handleSubmit(actions.updateQuery)(event)
        }}
        className="flex-1"
      >
        <AutoSubmit />
        <InputFormField
          name="search"
          variant={FormVariant.soft}
          iconStart={IconSearch}
          placeholder={messages['search.placeholder']}
        />
      </form>
    </FormProvider>
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
