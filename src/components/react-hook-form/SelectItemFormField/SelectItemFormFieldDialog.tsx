import { IndexType } from '@aboutbits/pagination'
import IconSearch from '@aboutbits/react-material-icons/dist/IconSearchRounded'
import { useQueryAndPagination } from '@aboutbits/react-pagination/dist/routers/inMemory'
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
import { FormVariant } from '../../form'
import { PaginationInMemoryProps } from '../../pagination'
import { AutoSubmit } from '../AutoSubmit'
import { InputFormField } from '../InputFormField'

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

export type SelectItemFormFieldDialogProps<ItemType, Error> = DialogProps & {
  onConfirm: (item: ItemType) => void
  useGetData: (params: SearchQueryParameters & PaginationQueryParameters) => {
    data?: PaginatedResponse<ItemType>
    error?: Error
  }
  renderListItem: (item: ItemType) => ReactNode
  renderErrorMessage: (error: Error) => ReactNode
  noSearchResults: string
  paginationConfig: { indexType: IndexType }
  numberOfLoadingItems?: number
  title: ReactNode
}

const defaultValues: FilterParameters = {
  search: '',
}

export function SelectItemFormFieldDialog<ItemType, Error>({
  onConfirm,
  useGetData,
  renderListItem,
  renderErrorMessage,
  noSearchResults,
  paginationConfig,
  numberOfLoadingItems = 5,
  title,
  ...props
}: SelectItemFormFieldDialogProps<ItemType, Error>): ReactElement {
  const { form: theme } = useTheme()

  const { query, page, size, setQuery, setPage } = useQueryAndPagination(
    (query) => {
      if (query.search === undefined || Array.isArray(query.search)) {
        return {}
      }
      return { search: query.search }
    },
    defaultValues,
  )

  const { data, error } = useGetData({
    search: query.search,
    page,
    size,
  })

  const searching = query.search !== ''

  return (
    <Dialog mobilePosition={DialogPosition.Fullscreen} {...props}>
      <>
        <DialogHeaderArea>
          <DialogHeaderRow>
            <DialogHeaderCloseAction onClick={props.onDismiss} />
            <DialogHeaderTitle>{title}</DialogHeaderTitle>
          </DialogHeaderRow>
          <DialogHeaderRow className={theme.selectItem.dialogHeaderSearch}>
            <SelectItemDialogSearch
              setQuery={(query) => {
                setQuery(query)
              }}
            />
          </DialogHeaderRow>
        </DialogHeaderArea>
        <AsyncView
          data={data}
          error={error}
          renderSuccess={(data) => (
            <SelectItemDialogSuccess
              data={data}
              searching={searching}
              setPage={setPage}
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
  setQuery,
}: {
  setQuery: (query: Partial<FilterParameters>) => void
}): ReactElement {
  const { messages } = useInternationalization()
  const form = useForm({ defaultValues })
  const { form: theme } = useTheme()

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(event) => {
          // Stop propagation to prevent submitting a form outside of the dialog (bubbling up the React tree)
          event.stopPropagation()
          void form.handleSubmit(setQuery)(event)
        }}
        className={theme.selectItem.form}
      >
        <AutoSubmit />
        <InputFormField
          name="search"
          variant={FormVariant.Soft}
          iconStart={IconSearch}
          placeholder={messages['search.placeholder']}
        />
      </form>
    </FormProvider>
  )
}

export function SelectItemDialogSuccess<ItemType, Error>({
  data,
  setPage,
  searching,
  onConfirm,
  renderListItem,
  paginationConfig,
  noSearchResults,
}: {
  data: PaginatedResponse<ItemType>
  setPage: (page: number) => void
  searching: boolean
} & Pick<
  SelectItemFormFieldDialogProps<ItemType, Error>,
  'onConfirm' | 'renderListItem' | 'paginationConfig' | 'noSearchResults'
>): ReactElement {
  const { messages } = useInternationalization()
  const { form: theme } = useTheme()

  const empty = searching ? messages['select.search.empty'] : noSearchResults

  return data.items.length === 0 ? (
    <DialogContentEmpty text={empty} />
  ) : (
    <>
      <DialogContentArea
        enableScrollLayout={false}
        className={theme.selectItem.dialogContentArea.base}
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
        onChangePage={setPage}
        config={paginationConfig}
      />
    </>
  )
}
