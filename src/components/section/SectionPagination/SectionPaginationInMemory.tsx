import { useIntl } from 'react-intl'
import classNames from 'classnames'
import { calculatePagination } from '@aboutbits/pagination'
import {
  SectionPaginationContainer,
  SectionPaginationNextContent,
  SectionPaginationPagesList,
  SectionPaginationPagesListItem,
  SectionPaginationPreviousContent,
} from './SectionPagination'

type Props = {
  page: number
  size: number
  total: number
  paginationActions: { setPage: (page: number) => void }
}

const SectionPaginationInMemory: React.FC<Props> = ({
  page,
  size,
  total,
  paginationActions,
}) => {
  const intl = useIntl()
  const pagination = calculatePagination(page, size, total)

  if (pagination === null) return null

  const enabledLink = 'hover:underline'
  const disabledLink = 'text-gray-500 cursor-not-allowed pointer-events-none'
  const currentLink = 'font-bold'

  return (
    <SectionPaginationContainer>
      <button
        aria-label={intl.formatMessage({ id: 'shared.pagination.previous' })}
        aria-disabled={pagination.previous.isDisabled}
        className={classNames(
          'flex items-center',
          pagination.previous.isDisabled ? disabledLink : enabledLink
        )}
        onClick={() => {
          paginationActions.setPage(pagination.previous.indexNumber)
        }}
      >
        <SectionPaginationPreviousContent />
      </button>

      <SectionPaginationPagesList>
        {pagination.pages.map((page) => {
          return (
            <SectionPaginationPagesListItem key={page.indexNumber}>
              <button
                aria-current={page.isCurrent ? 'page' : false}
                aria-label={intl.formatMessage(
                  { id: 'shared.pagination.page' },
                  { page: page.displayNumber }
                )}
                className={classNames(
                  enabledLink,
                  page.isCurrent ? currentLink : ''
                )}
                onClick={() => {
                  paginationActions.setPage(page.indexNumber)
                }}
              >
                {page.displayNumber}
              </button>
            </SectionPaginationPagesListItem>
          )
        })}
      </SectionPaginationPagesList>

      <button
        aria-label={intl.formatMessage({ id: 'shared.pagination.next' })}
        aria-disabled={pagination.next.isDisabled}
        className={classNames(
          'flex items-center',
          pagination.next.isDisabled ? disabledLink : enabledLink
        )}
        onClick={() => {
          paginationActions.setPage(pagination.next.indexNumber)
        }}
      >
        <SectionPaginationNextContent />
      </button>
    </SectionPaginationContainer>
  )
}

export { SectionPaginationInMemory }
